#include <stdio.h>      // printf(), fgets(), perror()
#include <stdlib.h>     // General utility functions
#include <sys/ipc.h>    // IPC key functions and definitions
#include <sys/shm.h>    // Shared-memory functions
#include <sys/wait.h>   // wait()
#include <unistd.h>     // fork()
#include <string.h>     // strlen()

int main(void)
{
    // Create a key that will identify our shared-memory segment.
    // "." means the current directory and 'A' is a project identifier.
    key_t key = ftok(".", 'A');

    int shmid;       // ID number of the shared-memory segment
    char *memory;    // Address where shared memory is attached
    pid_t pid;       // Process ID returned by fork()

    // ftok() returns -1 if it cannot create a key.
    if (key == -1) {
        perror("ftok");
        return 1;
    }

    // Create a shared-memory segment of 1024 bytes.
    // IPC_CREAT: create it if it does not already exist.
    // 0666: allow the owner, group, and others to read and write.
    shmid = shmget(key, 1024, IPC_CREAT | 0666);
    if (shmid == -1) {
        perror("shmget");
        return 1;
    }

    // Attach the shared-memory segment to this process.
    // After this, 'memory' can be used like a character array.
    memory = shmat(shmid, NULL, 0);
    if (memory == (void *)-1) {
        perror("shmat");
        return 1;
    }

    // The parent stores the message directly in shared memory.
    printf("Enter a message: ");
    fgets(memory, 1024, stdin);

    // Create a child process.
    // fork() returns 0 to the child and a positive value to the parent.
    pid = fork();

    if (pid == 0) {
        // The child uses the same shared memory and reads the parent's message.
        printf("Child reads: %s\n", memory);
        printf("Size: %zu\n", strlen(memory));

        // Detach the shared memory from the child process.
        shmdt(memory);
    } else if (pid > 0) {
        // The parent waits until the child finishes reading.
        wait(NULL);

        // Detach the shared memory from the parent process.
        shmdt(memory);

        // Delete the shared-memory segment because it is no longer needed.
        shmctl(shmid, IPC_RMID, NULL);
    } else {
        // fork() returns -1 if creating the child fails.
        perror("fork");
        shmdt(memory);
        shmctl(shmid, IPC_RMID, NULL);
        return 1;
    }

    return 0;
}

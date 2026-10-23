
#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/shm.h>

struct shared
{
    volatile int ready;
    char text[256];
};

int main()
{
    key_t key = ftok("/tmp", 'S');
    int shmid = shmget(key, sizeof(struct shared), 0666);

    if (shmid == -1)
    {
        perror("shmget");
        return 1;
    }

    struct shared *data = shmat(shmid, NULL, 0);

    if (data == (void *) -1)
    {
        perror("shmat");
        return 1;
    }

    printf("Enter line: ");

    if (fgets(data->text, sizeof(data->text), stdin) != NULL)
    {
        data->ready = 1;
        printf("Message written to shared memory.\n");
    }

    shmdt(data);
    return 0;
}

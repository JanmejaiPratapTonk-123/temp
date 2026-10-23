
#include <stdio.h>
#include <unistd.h>
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
    int shmid = shmget(key, sizeof(struct shared), IPC_CREAT | 0666);

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

    data->ready = 0;
    printf("Waiting for message...\n");

    while (data->ready == 0)
        usleep(1000);

    printf("Reader received:\n%s", data->text);
    printf("Bytes read: %zu\n", strlen(data->text));

    shmdt(data);
    shmctl(shmid, IPC_RMID, NULL);

    return 0;
}

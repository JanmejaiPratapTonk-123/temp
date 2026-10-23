#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/msg.h>

struct message
{
    long mtype;
    char mtext[256];
};

int main()
{
    key_t key = ftok("/tmp", 'M');
    int msgid = msgget(key, IPC_CREAT | 0666);

    if (msgid == -1)
    {
        perror("msgget");
        return 1;
    }

    struct message msg;
    ssize_t bytes = msgrcv(msgid, &msg, sizeof(msg.mtext) - 1, 1, 0);

    if (bytes == -1)
    {
        perror("msgrcv");
        return 1;
    }

    msg.mtext[bytes] = '\0';

    printf("Reader received:\n%s", msg.mtext);
    printf("Bytes received: %zd\n", bytes);

    if (msgctl(msgid, IPC_RMID, NULL) == -1)
        perror("msgctl");

    return 0;
}

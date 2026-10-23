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
    msg.mtype = 1;

    printf("Enter line: ");

    if (fgets(msg.mtext, sizeof(msg.mtext), stdin) != NULL)
    {
        size_t bytes = strlen(msg.mtext);

        if (msgsnd(msgid, &msg, bytes, 0) == -1)
        {
            perror("msgsnd");
            return 1;
        }

        printf("Bytes sent: %zu\n", bytes);
    }

    return 0;
}

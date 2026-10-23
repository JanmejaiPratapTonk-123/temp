#include <stdio.h>
#include <string.h>
#include <unistd.h>
//#include <sys/wait.h>

int main() 
{
    int fd[2];
    if(pipe(fd) == -1)
    {
        printf("Error in opening a pipe\n");
        return 1;
    }

    int pid = fork();
    if(pid == -1)
    {
        printf("Error in fork\n");
        return 1;
    }

    if(pid == 0)
    {
        close(fd[0]);
        char line[256];
        printf("Enter line: ");
        if(fgets(line, sizeof(line), stdin) != NULL)
            write(fd[1], line, strlen(line));
        close(fd[1]);
    }
    else
    {
        close(fd[1]);
        char buffer[256];
        ssize_t byte = read(fd[0], buffer, sizeof(buffer) - 1);
        if(byte > 0)
        {
            buffer[byte] = '\0';
            printf("Parent read:\n%s", buffer);
            printf("Byte transfered: %zd\n", byte);
        }
        close(fd[0]);
        wait(NULL);
    }
    return 0;
}

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>

int main()
{
    if (mkfifo("/tmp/myfifo", 0666) == -1)
    {
        perror("mkfifo");
        return 1;
    }

    char line[256];

    int fd = open("/tmp/myfifo", O_WRONLY);
    if (fd == -1)
    {
        perror("open");
        return 1;
    }

    printf("Enter line: ");

    if (fgets(line, sizeof(line), stdin) != NULL)
        write(fd, line, strlen(line));

    close(fd);
    return 0;
}


#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>

int main()
{
    int fd = open("/tmp/myfifo", O_RDONLY);
    if (fd == -1)
    {
        perror("open");
        return 1;
    }

    char buffer[256];
    ssize_t byte = read(fd, buffer, sizeof(buffer) - 1);

    if (byte > 0)
    {
        buffer[byte] = '\0';
        printf("Reader read:\n%s", buffer);
        printf("Bytes read: %zd\n", byte);
    }

    close(fd);
    return 0;
}

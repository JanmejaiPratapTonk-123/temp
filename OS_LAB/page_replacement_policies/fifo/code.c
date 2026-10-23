#include <stdio.h>
#include <stdlib.h>

int main()
{
    int hits = 0;

    int n;
    printf("Enter size of reference string: ");
    scanf("%d", &n);

    int page_size;
    printf("Enter page size: ");
    scanf("%d", &page_size);

    if (n <= 0 || page_size <= 0)
    {
        printf("Invalid size\n");
        return 1;
    }

    int frames[page_size];
    int pattern_history[page_size][n];

    for (int i = 0; i < page_size; i++)
        frames[i] = -1;

    int *reference_string = malloc(n * sizeof(int));

    if (reference_string == NULL)
    {
        printf("Memory allocation failed\n");
        return 1;
    }

    printf("Enter Elements:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &reference_string[i]);

    printf("\n");
    printf("Reference String:\n");
    for (int i = 0; i < n; i++)
        printf("%d ", reference_string[i]);

    int fifo_index = 0;

    for (int i = 0; i < n; i++)
    {
        int hit = 0;

        for (int j = 0; j < page_size; j++)
        {
            if (reference_string[i] == frames[j])
            {
                hits++;
                hit = 1;
                break;
            }
        }

        if (!hit)
        {
            frames[fifo_index] = reference_string[i];
            fifo_index = (fifo_index + 1) % page_size;
        }

        for (int j = 0; j < page_size; j++)
            pattern_history[j][i] = frames[j];
    }

    printf("\n\n");

    for (int j = 0; j < page_size; j++)
    {
        for (int i = 0; i < n; i++)
        {
            if (pattern_history[j][i] == -1)
                printf(" |");
            else
                printf("%d|", pattern_history[j][i]);
        }
        printf("\n");
    }

    printf("Hits: %d\n", hits);
    printf("Page Faults: %d\n", n - hits);

    free(reference_string);
    return 0;
}
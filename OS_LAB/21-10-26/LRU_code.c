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
    int last_used[page_size];
    int pattern_history[page_size][n];

    for (int i = 0; i < page_size; i++)
    {
        frames[i] = -1;
        last_used[i] = -1;
    }

    int *reference_string = (int *)malloc(n * sizeof(int));

    printf("Enter Elements:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &reference_string[i]);

    printf("\n");
    printf("Reference String:\n");
    for (int i = 0; i < n; i++)
        printf("%d ", reference_string[i]);

    for (int i = 0; i < n; i++)
    {
        int hit = 0;
        for (int j = 0; j < page_size; j++)
        {
            if (reference_string[i] == frames[j])
            {
                hits++;
                last_used[j] = i;
                hit = 1;
                break;
            }
        }
        if (!hit)
        {
            int empty = -1;

            for (int j = 0; j < page_size; j++)
            {
                if (frames[j] == -1)
                {
                    empty = j;
                    break;
                }
            }
            if (empty != -1)
            {
                frames[empty] = reference_string[i];
                last_used[empty] = i;
            }
            else
            {
                int lru = last_used[0];
                int lruIdx = 0;
                for (int j = 1; j < page_size; j++)
                {
                    if (last_used[j] < lru)
                    {
                        lru = last_used[j];
                        lruIdx = j;
                    }
                }
                frames[lruIdx] = reference_string[i];
                last_used[lruIdx] = i;
            }
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
    printf("Page Faults: %d", n - hits);

    free(reference_string);
    return 0;
}
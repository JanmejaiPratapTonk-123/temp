Least Recently Used(LRU) Page Replacement

1. The page used least number of times becomes the victim.

eg-

reference string
=======================================
7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1
=======================================
7|7|7|2|2|2|2|4|4|4|0|0|0|1|1|1|1|1|1|1|
 |0|7|0|0|0|0|0|0|3|3|3|3|3|3|0|0|0|0|0|
 | |1|1|1|3|3|3|2|2|2|2|2|2|2|2|2|7|7|7|


2. It is better than FIFO.
3. LRU has thrashing.

THRASHING-
- A condition where there is high page replacement activity.
- Rather than calculating the CPU is more busy in page replacement.
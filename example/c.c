/*
 * c-syntax-examples.c
 * Demonstrates common C language syntax and semantics.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <stdbool.h>

/* Preprocessor: macros and conditional compilation */
#define PI 3.14159
#define MAX(a,b) ((a) > (b) ? (a) : (b))
#ifdef _WIN32
  #define OS_NAME "Windows"
#else
  #define OS_NAME "Unix-like"
#endif

/* Type definitions */
typedef unsigned long u64;

enum Color { RED = 1, GREEN, BLUE };

struct Point {
    int x;
    int y;
};

union Data {
    int i;
    float f;
    char str[20];
};

/* Function prototype */
static inline _Noreturn void fatal_error(const char *msg);

/* Global variables */
extern int global_count;
static int internal_flag = 0;
_Thread_local int thread_local_var = 0;

int global_count = 0;

int main(int argc, char *argv[]) {
    /* Comments: single-line and multi-line */
    // Initialize variables
    int i = 0, j = 10;
    const char *greeting = "Hello, World!";
    char buffer[50];

    /* Control flow: if-else */
    if (argc > 1) {
        printf("Arguments provided: %d\n", argc);
    } else {
        printf("No arguments.\n");
    }

    /* Switch-case */
    enum Color fav = BLUE;
    switch (fav) {
        case RED:
            puts("Favorite is RED");
            break;
        case GREEN:
            puts("Favorite is GREEN");
            break;
        default:
            puts("Favorite is BLUE or unknown");
    }

    /* Loops: for, while, do-while */
    for (i = 0; i < 5; ++i) {
        printf("for loop i=%d\n", i);
    }
    while (j > 0) {
        printf("while j=%d\n", j--);
    }
    do {
        printf("do-while j=%d\n", j);
    } while (j < 0);

    /* Pointers and arrays */
    int arr[3] = {1, 2, 3};
    int *p = arr;
    for (size_t k = 0; k < 3; ++k) {
        printf("arr[%zu] = %d, *(p+%zu) = %d\n", k, arr[k], k, *(p + k));
    }

    /* Structs and unions */
    struct Point pt = { .x = 5, .y = 10 };
    printf("Point x=%d, y=%d\n", pt.x, pt.y);

    union Data d;
    d.i = 42;
    printf("Union as int: %d\n", d.i);
    d.f = 3.14f;
    printf("Union as float: %f\n", d.f);

    /* Memory allocation */
    char *dyn = malloc(20);
    if (!dyn) fatal_error("Allocation failed");
    strcpy(dyn, greeting);
    printf("Dynamic: %s\n", dyn);
    free(dyn);

    /* Generic selection (C11) and static assertion */
    static_assert(sizeof(long) >= 4, "long too small");
    _Generic(i,
        int: printf("i is int\n"),
        default: printf("Unknown type\n")
    );

    /* Atomic (C11) example */
    _Atomic int atom = 0;
    atom = 100;
    printf("Atomic value=%d\n", atom);

    return 0;
}

/* Function definition */
static inline _Noreturn void fatal_error(const char *msg) {
    fprintf(stderr, "Fatal: %s\n", msg);
    exit(EXIT_FAILURE);
}

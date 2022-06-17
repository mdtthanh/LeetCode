#include<stdio.h>

int main(){
    int n, start;
    int result = 0;
    printf("Nhap n:", n);
    scanf("%d", &n);
    printf("Nhap start: ", start);
    scanf("%d", &start);  
    for(int i=0; i<n; i++){
        result = start + 2*i;
        
    }
    printf("Nhap end: %d", result);
}
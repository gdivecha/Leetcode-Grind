import java.lang.Math;

class Solution {
    public double average(int[] salary) {
        double average = 0;
        int sl = salary.length;
        int isValid = 0;
        if(((sl)>=3)&&((sl)<=100)){
            for(int i=0; i<sl; i++){
                if((salary[i]<1000)||(salary[i]>(Math.pow(10,6)))){
                    isValid++;
                }
            }
            if(isValid==0){
                double sum = 0;
                insertionSort(salary);
                for(int i=1; i<(sl-1); i++){
                    if(salary[i]!=salary[i+1]){
                        sum+=salary[i];
                    }
                    else{
                        isValid++;
                    }
                }
                if(isValid==0){
                    average = (sum)/(sl-2);
                }
            }
        }
        return average;
    }
    public void insertionSort(int[] arr){
        int i, key, j;
        for (i=1; i<arr.length; i++){
            key=arr[i];
            j=i-1;
            while ((j>=0)&&(arr[j]>key)){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
    }
}
import java.util.Arrays;

class Solution {
    public int pivotIndex(int[] nums) {
        int indexToReturn = -1;
        int n = nums.length;
        int valid = 0;
        if((n>=1)&&(n<=10000)){
            for(int i=0; i<n; i++){
                if((nums[i]<-1000)||(nums[i]>1000)){
                    valid++;
                    break;
                }
            }
        }
        if(valid==0){
            int leftSum = 0;
            int rightSum = 0;
            int code = 0;
            for(int i=0; i<n; i++){
                if(i==0){
                    leftSum = 0;
                    code = 1;
                }
                else if(i==(n-1)){
                    rightSum = 0;
                    code = 2;
                }
                if(code==1){ //First index so find right
                    rightSum = findSum(Arrays.copyOfRange(nums,i+1,n));
                    code = 0;
                }
                else if(code==2){ //Last index, so find Left
                    leftSum = findSum(Arrays.copyOfRange(nums,0,i));
                    code = 0;
                }
                else{
                    leftSum = findSum(Arrays.copyOfRange(nums,0,i));
                    rightSum = findSum(Arrays.copyOfRange(nums,i+1,n));
                }
                if(leftSum==rightSum){
                    indexToReturn = i;
                    break;
                }
            }
        }
        return indexToReturn;
    }
    public int findSum(int[] arr){
        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }
}
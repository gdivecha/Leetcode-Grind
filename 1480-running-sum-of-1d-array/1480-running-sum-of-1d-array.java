import java.lang.Math;

class Solution {
    public int[] runningSum(int[] nums) {
        int[] sumNums = new int[nums.length];
        int valid = 0;
        if((nums.length>=1)&&(nums.length<=1000)){
            int sum = 0;
            for(int i=0; i<nums.length; i++){
                sum+=nums[i];
                sumNums[i] = sum;
                if(((-1*Math.pow(10,6))>nums[i])||(nums[i]>(Math.pow(10,6)))){
                    valid++;
                    break;
                }
            }
        }
        if(valid==0){
            return sumNums;
        }
        return null;
    }
}
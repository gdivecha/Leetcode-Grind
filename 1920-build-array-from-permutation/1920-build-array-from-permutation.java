class Solution {
    public int[] buildArray(int[] nums) {
        int n = nums.length;
        int error = 0;
        if((1<=n)&&(n<=1000)){
            for(int i=0; i<n; i++){
                if((nums[i]<0)||(nums[i]>n)){
                    error++;
                }
                if(error==0){
                    nums[i] = (n*(nums[nums[i]]%n) + nums[i]);
                }
            }
            for(int i=0; i<n; i++){
                System.out.println(nums[i]+", ");
            }
            for(int i=0; i<n; i++){
                 nums[i] = nums[i]/n;
            }
        }
        if(error!=0){
            return null;
        }
        return nums;
    }
}
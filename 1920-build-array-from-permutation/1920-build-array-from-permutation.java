class Solution {
    public int[] buildArray(int[] nums) {
        int n = nums.length;
        int error = 0;
        int[] ans = new int[n];
        int count = 0;
        if((1<=n)&&(n<=1000)){
            for(int i=0; i<n; i++){
                if((nums[i]<0)||(nums[i]>n)){
                    error++;
                }
                if(error==0){
                    ans[count] = nums[nums[i]];
                    count++;
                }
            }
        }
        if(error!=0){
            return null;
        }
        return ans;
    }
}
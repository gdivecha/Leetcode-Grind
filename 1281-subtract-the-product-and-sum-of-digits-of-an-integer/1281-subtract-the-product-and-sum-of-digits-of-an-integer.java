class Solution {
    public int subtractProductAndSum(int n) {
        int toReturn = 0;
        if((n>=1)&&(n<=100000)){
            String integerPassed = Integer.toString(n);
            int sum = 0;
            int product = 1;
            for(int i=0 ;i<integerPassed.length(); i++){
                sum+=Integer.parseInt(integerPassed.charAt(i)+"");
                product*=Integer.parseInt(integerPassed.charAt(i)+"");
            }
            toReturn = product-sum;
        }
        return toReturn;
    }
}
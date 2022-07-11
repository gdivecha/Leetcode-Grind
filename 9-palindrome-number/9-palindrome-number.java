import java.lang.Math;

class Solution {
    public boolean isPalindrome(int x) {
        boolean palindrome = true;
        if((x>=Math.pow(-2,31))&&(x<=((Math.pow(2,31))-1))){
            String s = Integer.toString(x);
            int j = s.length()-1;
            for(int i=0; i<s.length(); i++){
                if(s.charAt(i)!=s.charAt(j)){
                    palindrome = false;
                    break;
                }
                j--;
            }
        }
        return palindrome;
    }
}
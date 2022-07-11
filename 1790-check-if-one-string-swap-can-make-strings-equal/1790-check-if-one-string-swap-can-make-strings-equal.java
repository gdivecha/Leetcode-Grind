class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        boolean stringSwap = false;
        int s1l = s1.length();
        int s2l = s2.length();
        if(((s1l>=1)&&(s1l<=100))&&((s2l>=1)&&(s2l<=100))&&(s1l==s2l)){
            int isValid = 0;
            for(int i=0; i<s1l; i++){
                if((s1.charAt(i)<'a')||(s1.charAt(i)>'z')){
                    isValid++;
                    break;
                }
            }
            for(int i=0; i<s2l; i++){
                if((s2.charAt(i)<'a')||(s2.charAt(i)>'z')){
                    isValid++;
                    break;
                }
            }
            if(isValid==0){
                if(s1.equals(s2)){
                    return true;
                }
                int[] indicesToSwap = new int[3];
                indicesToSwap[0] = -1;
                indicesToSwap[1] = -1;
                indicesToSwap[2] = -1;
                int count = 0;
                for(int i=0; i<s1l; i++){
                    if(s1.charAt(i)!=s2.charAt(i)){
                        indicesToSwap[count] = i;
                        count++;
                        if(count==2){
                            break;
                        }
                    }
                }
                if(indicesToSwap[2] != -1){
                    stringSwap = false;
                }
                if(indicesToSwap[1] == -1){
                    stringSwap = false;
                }
                else{
                    s1 = s1.substring(0,indicesToSwap[0]) + s1.charAt(indicesToSwap[1]) +
                        s1.substring(indicesToSwap[0]+1,indicesToSwap[1]) + 
                        s1.charAt(indicesToSwap[0]) + s1.substring(indicesToSwap[1]+1,s1l);
                    if(s1.equals(s2)){
                        stringSwap = true;
                    }
                    else{
                        stringSwap = false;
                    }
                }
            }
        }
        return stringSwap;
    }
}
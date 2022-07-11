import java.lang.Math;

class Solution {
    public int countOdds(int low, int high) {
        int count = 0;
        if((0<=low)&&(low<=high)&&(high<=(Math.pow(10,9)))){
            //Time may exceed for large numbers or differences
            // for(int i=low; i<=high; i++){
            //     if(i%2==1){
            //         count++;
            //     }
            // }
            //A more efficient approach
            count = (high-low)/2;
            if((low%2==1)||(high%2==1)){
                count++;
            }
        }
        return count;
    }
}
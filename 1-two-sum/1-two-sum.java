import java.lang.Math;
import java.util.ArrayList;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int count = 0;
        if((nums.length<2)||(nums.length>Math.pow(10,4)))
            count++;
        if(target<(Math.pow(-10,9))||(target>Math.pow(10,9)))
            count++;
        for(int i=0; i<nums.length; i++){
            if((nums[i]<Math.pow(-10,9))||(nums[i]>Math.pow(10,9))){
                count++;
                break;
            }
        }
        if(count!=0){
            System.out.println("The constraints aren't met");
            // return null;
        }
        int[] indices = new int[2];
        
        //The first attempt here takes O(n^2) time
        // for(int i=0; i<nums.length; i++){
        //     if(nums[i]<target){
        //         int temp = nums[i];
        //         for(int j=0; j<nums.length; j++){
        //             if(i!=j){
        //                 if(temp+nums[j]==target){
        //                     indices[0] = i;
        //                     indices[1] = j;
        //                 }
        //             }
        //         }
        //     }
        // }
        
        //The second take here takes less than O(n^2) time = O(n)
        // ArrayList<Integer> differences = new ArrayList<Integer>();;
        // for(int i=0; i<nums.length; i++){
        //     if(nums[i]<target){
        //         differences.add(target-(nums[i]));
        //     }
        // }
        // for(int i=0; i<nums.length; i++){
        //     int index = differences.indexOf(nums[i]);
        //     if((differences.contains(nums[i]))&&(index!=i)){
        //         indices[0] = i;
        //         indices[1] = index;
        //     }
        // }
        
        //return indices
        
        //Online answer - Practice Hashmap
        HashMap<Integer,Integer> indexMap = new HashMap<Integer,Integer>();
        for(int i = 0; i < nums.length; i++){
            Integer requiredNum = (Integer)(target - nums[i]);
            if(indexMap.containsKey(requiredNum)){
                int toReturn[] = {indexMap.get(requiredNum), i};
                return toReturn;
            }

            indexMap.put(nums[i], i);
        }
        return null;
    }
}
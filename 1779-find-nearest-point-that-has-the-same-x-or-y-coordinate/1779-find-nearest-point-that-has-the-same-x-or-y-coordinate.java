import java.util.ArrayList; 
import java.lang.Math;

class Solution {
    public int nearestValidPoint(int x, int y, int[][] points) {
        int indexToReturn = -1;
        if((points.length>=1)&&(points.length<=10000)&&(points[0].length==2)&&(((x>=1)&&(x<=10000))&&((y>=1)&&(y<=10000)))){
            int isValid = 0;
            for(int i=0; i<points.length; i++){
                int ai = points[i][0];
                int bi = points[i][1];
                if(((ai<1)||(ai>10000))||((bi<1)||(bi>10000))){
                    isValid++;
                }
            }
            if(isValid==0){
                ArrayList<ArrayList<Integer>> tracker = new ArrayList<ArrayList<Integer>>();
                for(int i=0; i<points.length; i++){
                    int ai = points[i][0];
                    int bi = points[i][1];
                    if((x==ai)||(y==bi)){
                        ArrayList<Integer> newNum = new ArrayList<Integer>();
                        newNum.add(i);
                        newNum.add(Math.abs(x-ai)+Math.abs(y-bi));
                        tracker.add(newNum);
                    }
                }
                if(tracker.size()!=0){
                    int minDistance = tracker.get(0).get(1);
                    int minIndex = tracker.get(0).get(0);
                    for(ArrayList<Integer> entry : tracker){
                        if(minDistance>entry.get(1)){
                            minDistance=entry.get(1);
                            minIndex = entry.get(0);
                        }
                    }
                    indexToReturn = minIndex;   
                }
            }
        }
        return indexToReturn;
    }
}
class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        int[][] matrixToReturn = mat;
        if(mat!=null){
            int m = mat.length; //original rows
            int n = mat[0].length;   //original columns
            if(((m>=1)&&(m<=1000))&&((n>=1)&&(n<=1000))){
                if(((r>=1)&&(r<=300))&&((c>=1)&&(c<=300))){
                    if((m*n)==(r*c)){
                        int[][] tempArr = new int[1][m*n];
                        int colCount = 0;
                        for(int i=0; i<m; i++){
                            for(int j=0; j<n; j++){
                                tempArr[0][colCount] = mat[i][j];
                                colCount++;
                            }
                        }
                        // for(int i=0; i<tempArr[0].length; i++){
                        //     System.out.print(tempArr[0][i] + ", ");
                        // }
                        matrixToReturn = new int[r][c];
                        int currentRow = 0;
                        for(int i=0; i<tempArr[0].length; i++){
                            if((i%c)==0 && i>=c){
                                currentRow++;
                            }
                            matrixToReturn[currentRow][i%c] = tempArr[0][i];
                        }
                    }
                }
            }
        }
        return matrixToReturn;
    }
}
class Solution {
    public int romanToInt(String s) {
        int len = s.length();
        int value = 0;
        if((len>=1)&&(len<=15)){
            boolean valid = true;
            for(int i=0; i<len; i++){
                char c = s.charAt(i);
                if((c!='I')&&(c!='V')&&(c!='X')&&(c!='L')&&(c!='C')&&(c!='D')&&(c!='M')){
                    valid = false;
                    break;
                }
            }
            if(valid==true){
                value = algo(s);
            }
        }
        return value;
    }
    public int algo(String s){
        int sum = 0;
        for(int i=0; i<s.length(); i++){
            int current = convert(s.charAt(i));
            int next = 0;
            if(i==s.length()-1){
                sum+=current;
                break;
            }
            else
                next = convert(s.charAt(i+1));
            if(current>=next){
                sum+=current;
            }
            else{
                sum+=(next-current);
                i++;
            }
        }
        return sum;
    }
    public int convert(char c){
        int valueToReturn = 0;
        switch(c){
            case 'I':
                valueToReturn = 1;
                break;
            case 'V':
                valueToReturn = 5;
                break;
            case 'X':
                valueToReturn = 10;
                break;
            case 'L':
                valueToReturn = 50;
                break;
            case 'C':
                valueToReturn = 100;
                break;
            case 'D':
                valueToReturn = 500;
                break;
            case 'M':
                valueToReturn = 1000;
                break;
        }
        return valueToReturn;
    }
}
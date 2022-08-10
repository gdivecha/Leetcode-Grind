class ParkingSystem {

    public int big, medium, small;
    
    public ParkingSystem(int big, int medium, int small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    
    public boolean addCar(int carType) {
        switch(carType){
            case 1: //When car is big
                if(this.big==0){
                    return false;
                }
                this.big--;
                break;
            case 2: //When car is medium
                if(this.medium==0){
                    return false;
                }
                this.medium--;
                break;
            case 3: // When car is small
                if(this.small==0){
                     return false;
                }
                this.small--;
                break;
        }
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * boolean param_1 = obj.addCar(carType);
 */
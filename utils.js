export default {
    fontSizer(screenWidth) {
        if(screenWidth > 400){
            return 16;
        }
        else if(screenWidth > 250){
            return 14;
        }
        else{
            return 12;
        }
    }
}
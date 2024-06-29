export const API_KEY ='AIzaSyBZuvOFd31UNsnBgm5Vmy9PxJOQfSztF0E';

export const value_converter =(value)=>{
    if(value>1000000)
        {
            return Math.floor(value/1000000)+ "M";
        }
        else if(value>=1000){
            return Math.floor(value/1000)+ "K";
        }
        else{
            return value;
        }
}
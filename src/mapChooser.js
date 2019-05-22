export default function mapChooser(locationName){

    let imageName
    if(!locationName){
        locationName = "none";
    }
        imageName = locationName + ".png";

    return (imageName);
}
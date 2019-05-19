export default function mapChooser(locationName){
    let imageName
    if(!locationName){
        imageName = "default.jpg";
    } else{
        imageName = locationName + ".jpg";
    }
    return (imageName);
}
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const holdNFT = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_personid, _name, _gender, _age) {
    const variableNFT = {
        "personid" : _personid,
        "name" : _name,
        "gender" : _gender,
        "age" : _age
    }
    holdNFT.push(variableNFT)
    console.log("You have been minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < holdNFT.length; i++){
        console.log("\nNFT Personal Data: \t");
        console.log("\nPerson Identification:\t" + holdNFT[i].personid);
        console.log("\nName:\t" + holdNFT[i].name);
        console.log("\nGender:\t" + holdNFT[i].gender);
        console.log("\nAge:\t" + holdNFT[i].age);
        console.log("\nUID:\t" + (i + i));

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Minted: \t" + holdNFT.length);
}

// call your functions below this line
mintNFT("100232", "Danny", "Male", "28");
mintNFT("100029", "Joyce", "Female", "32");
mintNFT("100011", "Genesis", "Male", "24");
mintNFT("100101", "Angela", "Female", "21");
mintNFT("100940", "Melly", "Female", "40");
mintNFT("100538", "Nena", "Female", "35");
mintNFT("100872", "Michelle", "Female", "20");
mintNFT("100001", "Daniel", "Male", "55");
listNFTs();
getTotalSupply();


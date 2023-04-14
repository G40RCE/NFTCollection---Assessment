const holdNFT = []
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


function getTotalSupply() {
    console.log("\nTotal Minted: \t" + holdNFT.length);
}


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


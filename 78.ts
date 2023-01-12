// 7) 
type NFT = {
    imageURL: string,
    name: string,
    currentOwnerAddress: string,
    openSeaFloorPrice: number,
    description: string
}

const nft1: NFT = {
    imageURL: "http://www.google.ca/images/1.jpg",
    name: "El Goog 404",
    currentOwnerAddress: "0x123456789",
    openSeaFloorPrice: 50,
    description: "everyone loves an error page"
}
const nft2: NFT = {
    imageURL: "http://www.google.ca/images/2.jpg",
    name: "Derivative",
    currentOwnerAddress: "0x987654321",
    openSeaFloorPrice: 10,
    description: "I feel like I've seen this one before"
}
const nft3: NFT = {
    imageURL: "http://farahfawcett.jpg",
    name: "Craptastic",
    currentOwnerAddress: "0x5318008",
    openSeaFloorPrice: 9999,
    description: "made using unregistered hypercam2"
}

// 8)
const nftArray = [nft1, nft2, nft3]

function getCheapestNft (array: Array<NFT>){
    let price=array[0].openSeaFloorPrice;
    for (let i=0; i<array.length; i++){
        if (array[i].openSeaFloorPrice < price) {
            price = array[i].openSeaFloorPrice;
            return array[i];
        }
    }
}

console.log(getCheapestNft(nftArray));
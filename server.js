function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Microservices rock!");
    const favouriteColor = process.env.FAVOURITE_COLOR;
    console.log(`My favourite color is ${favouriteColor}`);
    await sleep(5000);
  }
}

main();

const Migrations = artifacts.require("./Migrations.sol");
// const MarketPlace = artifacts.require("./MarketPlace.sol");

contract('Migrations', (_accounts) => {
    let migration;
    // let market_place;

    before(async () => {
        migration = await Migrations.deployed();
        // market_place = await MarketPlace.deployed();
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await migration.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        })
    })

    // describe('var checks', async () => {
    //     it('dummy found', async () => {
    //         const dummy = await market_place.dummy();
    //         assert.equal(dummy, 'dummy');
    //     })
    // }) 
})

// commented out, but kept; only to show usage
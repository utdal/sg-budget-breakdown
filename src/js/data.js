const TEST_DATA_LOCATION = '/data/test.json'

async function loadData() {
    try {
        const file = await fetch(TEST_DATA_LOCATION);
        console.log('Data loaded!');
        // TODO: Process data
        return file;
    } catch (e) {
        console.error("Could not load JSON from path", TEST_DATA_LOCATION);
        throw new Error('Could not load data.');
    }
}
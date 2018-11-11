module.exports = async (puppeteer) => {
  await puppeteer.type("input.email", "foo");
  await puppeteer.click("input[type='submit']");
};
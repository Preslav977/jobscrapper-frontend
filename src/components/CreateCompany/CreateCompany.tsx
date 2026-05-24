export function CreateCompany() {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="URL">
          URL
          <input type="text" name="URL" id="URL" />
        </label>
        <label htmlFor="file">
          Logo
          <input type="file" name="file" id="file" />
        </label>
        <label htmlFor="scrapMode">
          ScrapMode
          <input type="text" name="scrapMode" id="scrapMode" />
        </label>
        <label htmlFor="instructions">
          Instructions
          <input type="text" name="instructions" id="instructions" />
        </label>
        <label htmlFor="steps">
          Steps
          <input type="text" name="steps" id="stes" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

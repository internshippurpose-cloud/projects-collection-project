class SpecialHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML=`
          <div class="header" style="
            display: grid;
                grid-template-columns: 15% auto;
                background-image: linear-gradient(to bottom,darkblue,black);
            ">
            <div class="logo" style="
                display: flex;
                justify-content: center;
                align-items: center;
            ">
            <img src="logo3.PNG" style="
                width: 80%;
                height: auto;
                border: 2px solid whitesmoke;
                box-shadow: 5px 5px 5px white;
            "></div>
            <div class="nav-bar" style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                margin:0;
                padding:0;
            ">
                <h1 >Projects Collection</h1>
                <hr style="background-color: darkcyan;width: 80%;box-shadow: 10px 10px 10px lightskyblue;">
                  <i>With a wide range of collections</i>
                    <br>
                    <nav style="display: flex;justify-content: space-around;">
                        <a href="index.html" style="padding-right: 30px;text-decoration: none;color:cornflowerblue;font-size:clamp(1.0rem, 2vw, 1.5rem);font-weight: 700;">Home</a>
                        <a href="about.html" style="padding-right: 30px;text-decoration: none;color:cornflowerblue;font-size:clamp(1.0rem, 2vw, 1.5rem);font-weight: 700;">About Project collections</a>
                        <a href="contact.html" style="padding-right: 30px;text-decoration: none;color:cornflowerblue;font-size:clamp(1.0rem, 2vw, 1.5rem);font-weight: 700;">Get in touch</a>
                    </nav>
            </div>
        </div>
        `
    }
}

class SpecialFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML=`
            <div class="footer" style="
                background-image: linear-gradient(to bottom,darkblue,black);
                color: white;
                text-align: center;
                padding: 20px;
        ">
            <p>&copy;All rights reserved,developed by Projects Collection 2026</p>
        </div>
        `
    }
}

customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
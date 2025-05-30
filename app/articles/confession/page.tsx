import React from "react";
import "./style.css";


function Confession() {

  return (
    <div className="article-holder text-white mt-10 mb-10 mx-80">
      <>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            @shivamycodee/confession
          </span>
        </h1>
        <h4 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            11th September 2024
          </span>
        </h4>

        <h2 style={{marginTop:100}} className="mb-2" >Why you need this package?</h2>

<p>I have created a simple react vite webiste &amp; node.js server to expalin the usage...</p>

<ol>
<li>As you can see in the image below i'm running my webiste, which is sending a post request to the server at endpoint checkData, i'm sending a JWT Bearer token and encrypted payload with my request.<br /><br /><br /><br />
<img src={'/images/articles/first-conf.png'} alt="" width="100%" height="500" className="mb-4" />
<img src={'/images/articles/second-conf.png'} alt="" width="100%" height="100" className="mb-6" />
</li>


<li>The issue with the current procedure I followed (and many others do as well) is that I assumed using JWTs with short expiration times (mine is 30 seconds) and sending encrypted payloads would be enough to protect my server from replay attacks, 
DoS attacks, DDoS attacks, etc. However, it is not. In the image below, I demonstrate a replay attack using a third-party tool,
Postman Desktop, and I was able to easily fetch and manipulate my data by simply taking the JWT (before it expired) and the encrypted payload, then entering them into Postman.<br /><br /><br />
<img src={'/images/articles/third-conf.png'} alt="" width="100%" height="700" style={{marginBottom:20}} className="mb-6" />

Now you might say, 'But what if I keep the expiration time of my JWT very short, like just a few seconds? Although the client would need to request it multiple times, the hacker wouldn’t be able to do anything, right?' Wrong. Your JWT endpoint would still be open for anyone to call, so a hacker could simply request a new JWT and use the old encrypted payload to access the data.
</li>
</ol>

<p>My package, <a href='https://www.npmjs.com/package/@shivamycodee/confession' target='_blank'>@shivamycodee/confession</a>, resolves this issue. It uses <a href='https://bun.sh' target='_blank'>Bun</a> to make it optimized and fast, <a href="https://x.com/VibeWeb3/status/1827307028894945572"  target="_blank" >checkout this tweet </a> to get a simple comparison </p>

<h2 style={{marginTop:50,marginBottom:50}} >How package handles this issue?</h2>

<p>
My package uses the encrypted payload as a key to differentiate between requests, and I have added a nonce to the encrypted payload to keep track of each request. I store every request in a cache folder with a timestamp. The request will be removed from the server after the JWT expiration time.
For example, if the JWT expiration time is 30 seconds, any request hash older than 30 seconds will be removed from the server. So, if a hacker attempts a replay attack using a valid JWT and encrypted payload, this is the response from my package.
But what if the hacker uses a valid JWT and an old encrypted payload that has been removed from the server cache? Don’t worry—those cases are also handled by my package. Below, I have demonstrated various attacks and the responses from my package.
<span style={{color:"#a85454"}} >HERE THE HACKER I'M REFEREING TO CAN BY A THIRD PARTY BETWEEN CLIENT AND SERVER OR THE CLIENT HIMSELF.</span>
</p>

<ol>

<li>  When hacker tries to do a replay attack using a valid JWT and encrypted payload, this would be the response from my package:
  <img src={'/images/articles/four-conf.png'} alt="" width="100%" height="600" className="mt-4 mb-4" />
"Replay attack detected" would be returned to the request.</li>

  <li>  When hacker tries to do a replay attack using an expired JWT and encrypted payload, this would be the response from my package:
  <img src={'/images/articles/five-conf.png'} alt="" width="100%" height="600" className="mt-4 mb-4" />
</li>

<li> When hacker tries to do a replay attack using a valid JWT and an OLD encrypted payload which is removed from the server cache, this would be the response from my package:
    <img src={'/images/articles/six-conf.png'} alt="" width="100%" height="600" className="mt-4 mb-4" />
   "Hacker using old EncryptedPayload Hash." would be returned to the request.
</li>
</ol>

<h2 style={{marginTop:50,marginBottom:50}} >Here is a simple chart to explain how my package handles request...</h2>

<img src={'/images/articles/chart.png'} alt="" width="100%" height="800" className="mt-4 mb-4" />


<p>If you find any problem/issue in my package, please create an <a href="https://github.com/Shivamycodee/confession/issues/new" target="_blank" >issue thread here.</a></p>

       
<strong>
              If you are interested in this idea, hit me up at
              twitter/linkedin/telegram , links are in{" "}
              <a
                href="https://shivamyadav.codes/about"
                style={{ color: "lightblue" }}
              >
                About Me
              </a>{" "}
              Section.
            </strong>

      </>
    </div>
  );
}

export default Confession;

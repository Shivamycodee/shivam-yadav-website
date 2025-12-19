import React from 'react';
import Link from 'next/link';
import './style.css';

export default function SSHAttackAnalysis() {
  return (
    <div className="article-holder text-white mt-10 mb-10">

      <h1 style={{ textAlign: "center" }}>
        <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
          My Server Was Attacked 5,866 Times in Just a Few Days
        </span>
      </h1>
      <h4 style={{ textAlign: "center" }}>
        <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
          19th December 2025
        </span>
      </h4>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        As a blockchain developer, I've always known security matters. But I wanted to see what my servers actually face day-to-day.
      </p>
      <p>
        So I wrote a simple script to send Telegram alerts for every login attempt—successful or failed—on one of my public servers.
      </p>
      <p>
        I expected maybe 400-500 bot hits. I was way off.
      </p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>The Numbers</h2>
      <p>&nbsp;</p>

      <ul>
        <li><strong>5,866 failed login attempts</strong></li>
        <li>From <strong>99 countries</strong></li>
        <li><strong>620 different cities</strong></li>
        <li>Time period: <strong>9th November 2025 to 19th December 2025</strong> (40 days)</li>
      </ul>

      <p>&nbsp;</p>

      <p>
        This is what security researchers call "internet background noise"—automated scanners and bots constantly probing every public IP for weak passwords. They're hunting for anything they can break into: servers, CCTV cameras, baby monitors, IoT devices.
      </p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>Where the Attacks Came From</h2>
      <p>&nbsp;</p>

      <p>Top 5 countries accounted for over 52% of all attempts:</p>
      <p>&nbsp;</p>

      <ul>
        <li>🇨🇳 <strong>China:</strong> 963 attacks (16.4%)</li>
        <li>🇺🇸 <strong>United States:</strong> 832 attacks (14.2%)</li>
        <li>🇮🇳 <strong>India:</strong> 478 attacks (8.2%)</li>
        <li>🇷🇺 <strong>Russia:</strong> 467 attacks (8.0%)</li>
        <li>🇰🇷 <strong>South Korea:</strong> 332 attacks (5.7%)</li>
      </ul>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className="chart-container">
        <h3 style={{ textAlign: "center" }}>Geographic Distribution of Attacks</h3>
        <iframe
          src="/charts/ssh-attack-analysis/geo-charts.html"
          width="100%"
          height="600"
          style={{ border: 'none', borderRadius: '8px' }}
          title="Geographic attack distribution"
        />
      </div>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>Why Blockchain Projects Are Especially at Risk</h2>
      <p>&nbsp;</p>

      <p>
        A hacked server isn't just about stolen data. For blockchain applications, it can mean:
      </p>
      <p>&nbsp;</p>

      <ul>
        <li><strong>Drained wallets</strong></li>
        <li><strong>Leaked private keys</strong></li>
        <li><strong>Validator nodes going offline</strong></li>
      </ul>

      <p>&nbsp;</p>

      <p>
        When you're handling digital assets, one breach can cost millions. There's no "reset password" button for a compromised private key.
      </p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>Attack Patterns Over Time</h2>
      <p>&nbsp;</p>

      <p>
        The attacks weren't random. They came in waves—certain hours and days saw massive spikes. Here's the weekly breakdown:
      </p>

      <p>&nbsp;</p>

      <div className="chart-container">
        <h3 style={{ textAlign: "center" }}>Weekly Attack Trends</h3>
        <iframe
          src="/charts/ssh-attack-analysis/weekly-chart.html"
          width="100%"
          height="500"
          style={{ border: 'none', borderRadius: '8px' }}
          title="Weekly attack trends"
        />
      </div>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>How I Set This Up</h2>
      <p>&nbsp;</p>

      <p>The monitoring setup was surprisingly simple:</p>
      <p>&nbsp;</p>

      <ol>
        <li>Configured my server to log all SSH attempts</li>
        <li>Wrote a Node.js script to parse auth logs</li>
        <li>Sent Telegram alerts for each attempt</li>
        <li>Exported the Telegram chat as HTML</li>
        <li>Parsed the data and enriched it with geolocation</li>
        <li>Generated interactive charts with Chart.js</li>
      </ol>

      <p>&nbsp;</p>

      <p>
        The whole thing took maybe 2-3 hours to set up. Worth it to see what's actually happening.
      </p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>What You Should Do Right Now</h2>
      <p>&nbsp;</p>

      <p>Your server is being scanned right now. Here's what actually matters:</p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>1. Disable Password Login</strong>
        </span>
      </p>
      <p>Edit your SSH config:</p>
      <pre><code>{`# /etc/ssh/sshd_config
PasswordAuthentication no
PubkeyAuthentication yes`}</code></pre>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>2. Use SSH Keys Only</strong>
        </span>
      </p>
      <p>Generate a key pair if you haven't already:</p>
      <pre><code>{`ssh-keygen -t ed25519 -C "your_email@example.com"`}</code></pre>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>3. Change the Default SSH Port</strong>
        </span>
      </p>
      <p>Most bots scan port 22. Moving to a different port cuts noise significantly:</p>
      <pre><code>{`# /etc/ssh/sshd_config
Port 2222  # or any port you prefer`}</code></pre>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>4. Set Up Fail2Ban</strong>
        </span>
      </p>
      <p>Automatically ban IPs after failed attempts:</p>
      <pre><code>{`sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban`}</code></pre>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>5. Monitor Your Logs</strong>
        </span>
      </p>
      <p>You don't need a fancy setup. Even a simple script checking logs daily helps:</p>
      <pre><code>{`# Check recent failed login attempts
grep "Failed password" /var/log/auth.log | tail -20`}</code></pre>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2 style={{ textAlign: "center" }}>The Lesson</h2>
      <p>&nbsp;</p>

      <p>
        Whether you're in Web2 or Web3, basic security isn't optional. Your server is a target the moment it goes online.
      </p>
      <p>
        Assume you're being attacked—because you already are.
      </p>
      <p>
        For blockchain developers specifically: if you're running validators, RPC nodes, or anything that touches private keys, this isn't paranoia. It's reality.
      </p>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <strong>
        That's all for now. Stay secure out there. 🔐
      </strong>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
}

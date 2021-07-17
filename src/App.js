import "./styles.css";
import Editor from "./components/Editor";
import { makeStyles } from "@material-ui/core";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  root: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toggle: {
    width: "50px",
    height: "50px",
    backgroundColor: "grey",
    borderRadius: "50%",
    alignContent: "center",
    justifyContent: "center",
    position: "fixed",
    right: "40px",
    bottom: "40px",
  },
}));

export default function App() {
  const classes = useStyles();

  const [html, setHtml] = useLocalStorage("<h1>Hello</h1>", "");
  const [css, setCss] = useLocalStorage(
    `body{
    background-color:white;
  }`,
    ""
  );
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [active, setActive] = useLocalStorage("FirstCard", "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <html lang="en">

<head>
  <link rel="stylesheet" href="styles.css">
  <title>Google Web Page</title>
</head>

<body>

  <nav>
    <ul>
      <li> <a href='#' class='textlink'> Gmail </a></li>
      <li> <a href='#' class='textlink'> Images </a></li>
      <li>
        <a href='#'> <img src='https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fflatfrogblog.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fapp-launcher-150x150.png&container=blogger&gadget=a&rewriteMime=image%2F*'> </a>
      </li>
      <li> <a href='#' class='button blue'> Sign in </a></li>
    </ul>
  </nav>

  <div id="central">
    <img src="https://www.google.com/images/srpr/logo5w.png" title="Google">
    <form>
      <input type="text" title="Search">
      <input type="submit" value="Google Search">
      <input type="submit" value="I'm feeling lucky">
    </form>
  </div>


  <footer>

    <ul>
      <li> <a href='#' class='left'> Advertising </a></li>
      <li> <a href='#' class='left'> Business </a></li>
      <li> <a href='#' class='left'> About </a></li>

      <li> <a href='#' class='right'> Privacy </a></li>
      <li> <a href='#' class='right'> Terms </a></li>
      <li> <a href='#' class='right'> Settings </a></li>
      <li> <a href='#' class='right'> Use Google.com </a></li>
    </ul>
  </footer>
</body>

</html>
        <body>${html}</body>
        <style>
        body{
          background-color:white;
        }
        * {
        margin: 0;
        padding: 0;
      }
      
      body {
        font-size: 12;
        font-family: Arial, sans-serif;
      }
      
      nav ul li {
        display: inline;
        margin: 5px;
        font-size: 13px;
      }
      
      .textlink:hover {
        text-decoration: underline;
      }
      
      nav ul img {
        width: 15px;
        height 15px;
      }
      
      a:link,
      a:visited {
        color: black;
        text-decoration: none;
      }
      
      nav {
        text-align: right;
        margin-top: 25px;
      }
      
      .button.blue {
        background-color: #4D90FE;
        background-image: -webkit-linear-gradient(top, #4d90fe, #4787ed);
        background-image: -moz-linear-gradient(top, #4d90fe, #4787ed);
        background-image: -ms-linear-gradient(top, #4d90fe, #4787ed);
        background-image: -o-linear-gradient(top, #4d90fe, #4787ed);
        background-image: linear-gradient(top, #4d90fe, #4787ed);
        padding: 8px;
        border: 1px solid #3079ED;
        color: white;
      }
      
      .button.blue:hover {
        border: 1px solid #2F5BB7;
        background-color: #357AE8;
        background-image: -webkit-linear-gradient(top, #4d90fe, #357ae8);
        background-image: -moz-linear-gradient(top, #4d90fe, #357ae8);
        background-image: -ms-linear-gradient(top, #4d90fe, #357ae8);
        background-image: -o-linear-gradient(top, #4d90fe, #357ae8);
        background-image: linear-gradient(top, #4d90fe, #357ae8);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
      }
      
      #central {
        width: 580px;
        margin: 85px auto 0;
        text-align: center;
      }
      
      input[type='text'] {
        width: 575px;
        height: 30px;
        margin: 25px;
      }
      
      input[type='submit'] {
        margin: 5px 3px;
        height: 35px;
        width: 120px;
        color: #5c5c5c;
        border: none;
        background-color: #f2f2f;
        font-weight: bold;
      }
      
      input[type='submit']:hover {
        color: black;
        border: 1px solid #c6c6c6;
        background-color: #f8f8f8;
      }
      
      footer a:link,
      footer a:visited {
        color: #5c5c5c;
        text-decoration: none;
      }
      
      footer ul li {
        display: inline;
        color: #c6c6c6;
        margin: 10px;
      }
      
      .left:hover,
      .right:hover {
        text-decoration: underline;
      }
      
      footer {
        background-color: #f2f2f2;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #c6c6c6;
        font-size: 12px;
        height: 40px;
      }
      
      .left {
        float: left;
        margin: 15px;
      }
      
      .right {
        float: right;
        margin: 15px;
      }${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const [darkMode, setDarkMode] = useLocalStorage(true);
  const icon = darkMode ? <Brightness3Icon /> : <Brightness7Icon />;
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className="partition">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
              anchor="left"
            >
              <Typography
                variant="h6"
                style={{
                  alignSelf: "center",
                  margin: "1px",
                  padding: "20px",
                  fontWeight: "bold",
                  borderBottom: "solid",
                  fontFamily:"cursive"
                }}
              >
                FILE EXPLORER
              </Typography>
              <List>
                <ListItem button onClick={() => setActive("FirstCard")}>
                  <FaHtml5 style={{ marginRight: 5, fontSize: 35, color:"#fc6f03" }} />
                  <ListItemText primary="HTML" />
                </ListItem>
              </List>
              <List>
                <ListItem button onClick={() => setActive("SecondCard")}>
                  <FaCss3Alt style={{ marginRight: 5, fontSize: 35, color:"#00c3e6"}} />
                  <ListItemText primary="CSS" />
                </ListItem>
              </List>
              <List>
                <ListItem button onClick={() => setActive("ThirdCard")}>
                  <FaJs style={{ marginRight: 5, fontSize: 35, color:"#f0db4f" }} />
                  <ListItemText primary="JAVASCRIPT" />
                </ListItem>
              </List>
              <div className="footer">
                <Typography variant="overline">
                  Made with &#10084;&#65039; by Arnab{" "}
                </Typography>
                <div className="footer_button">
                  <GitHubIcon
                  
                    fontSize="large"
                    onClick={(event) =>
                      (window.location.href =
                        "https://github.com/arnabbiswasofficial07")
                    }
                  />
                  <LinkedInIcon
                    style={{
                      marginLeft: "8px",
                    }}
                    fontSize="large"
                    onClick={(event) =>
                      (window.location.href =
                        "https://www.linkedin.com/in/arnab-biswas07/")
                    }
                  />
                </div>
              </div>
            </Drawer>
            <div className="editor">
              {active === "FirstCard" && (
                <Editor
                  language="xml"
                  displayName="HTML"
                  value={html}
                  onChange={setHtml}
                  theme={darkMode}
                />
              )}
              {active === "SecondCard" && (
                <Editor
                  language="css"
                  displayName="CSS"
                  value={css}
                  onChange={setCss}
                  theme={darkMode}
                />
              )}
              {active === "ThirdCard" && (
                <Editor
                  language="javascript"
                  displayName="Javascript"
                  value={js}
                  onChange={setJs}
                  theme={darkMode}
                />
              )}
            </div>
            <div className="output">
              <div className="editor_title">LIVE VIEW</div>
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className={classes.toggle}>
            <IconButton
              style={
                darkMode
                  ? {
                      alignSelf: "center",
                      color: "white",
                      backgroundColor: "#404040",
                    }
                  : {
                      alignSelf: "center",

                      color: "orange",
                      backgroundColor: "#b3f0ff",
                    }
              }
              edge="end"
              aria-label="mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {icon}
            </IconButton>
          </div>
        </Paper>
      </ThemeProvider>
    </>
  );
}

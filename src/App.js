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
        <body>${html}</body>
        <style>
        body{
          background-color:white;
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

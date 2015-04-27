name := """play-angular-material-require-seed"""

version := "1.0-SNAPSHOT"

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  ws,
  // WebJars
  "org.webjars" % "webjars-play_2.11" % "2.3.0-3",
  "org.webjars" % "requirejs" % "2.1.17",
  "org.webjars" % "angularjs" % "1.3.15",
  "org.webjars" % "angular-material" % "0.9.0-rc2",
  "org.webjars" % "angular-ui-router" % "0.2.13"
)

//javacOptions ++= Seq("-source", "1.8", "-target", "1.8", "-Xlint:unchecked", "-encoding", "UTF-8")

//doc in Compile <<= target.map(_ / "none")

lazy val root = (project in file(".")).enablePlugins(PlayScala)
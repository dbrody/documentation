/*! For license information please see f7098925.35eff9aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(224)),i=n(228),l={last_modified_on:"2020-04-20",$schema:"/.meta/.schemas/guides.json",title:"URL Shortener API with Kotlin",description:"Create a URL shortener API with Kotlin, the micro-framework Ktor and PostgreSQL",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","domain: services"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"URL Shortener API with Kotlin",description:"Create a URL shortener API with Kotlin, the micro-framework Ktor and PostgreSQL",permalink:"/guides/tutorial/url-shortener-api-with-kotlin",readingTime:"12 min read",source:"@site/guides/tutorial/url-shortener-api-with-kotlin.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: services",permalink:"/guides/tags/domain-services"}],title:"URL Shortener API with Kotlin",truncated:!1,prevItem:{title:"Microservices",permalink:"/guides/advanced/microservices"},nextItem:{title:"Using multiple environments",permalink:"/guides/advanced/using-multiple-environments"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"What is a URL shortener?",id:"what-is-a-url-shortener",children:[]},{value:"Ktor principles",id:"ktor-principles",children:[{value:"Kotlin",id:"kotlin",children:[]},{value:"Functional programming",id:"functional-programming",children:[]},{value:"Asynchronous",id:"asynchronous",children:[]}]},{value:"HTTP Server",id:"http-server",children:[]},{value:"URL Encoder",id:"url-encoder",children:[{value:"Handle identifier collision",id:"handle-identifier-collision",children:[]}]},{value:"URL Decoder",id:"url-decoder",children:[]},{value:"Redirect",id:"redirect",children:[]},{value:"Stats: clicks over time",id:"stats-clicks-over-time",children:[]},{value:"Try the API",id:"try-the-api",children:[]},{value:"Connect to a PostgreSQL database with Exposed",id:"connect-to-a-postgresql-database-with-exposed",children:[]},{value:"Deploy in the Cloud with Qovery",id:"deploy-in-the-cloud-with-qovery",children:[{value:"Connect to PostgreSQL",id:"connect-to-postgresql",children:[]},{value:"Deploy",id:"deploy",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The source code for this post can be found on this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/ktor-url-shortener"}),"github repo")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ktor.io/"}),"Ktor")," is a brand new micro-framework created by the Jetbrains team and running over the JVM. Jetbrains are the authors of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.org/"}),"Kotlin")," - which is now the official programming language for Android, and one of the most popular programming language on the JVM. Kotlin is gaining popularity on server-side and multi-platform application development."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Ktor is a framework for building asynchronous servers and clients in connected systems using the powerful Kotlin programming language.")),Object(o.b)("p",null,"In this article you will learn:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to design a simple URL shortener."),Object(o.b)("li",{parentName:"ul"},"How to use the Ktor micro-framework with Kotlin"),Object(o.b)("li",{parentName:"ul"},"How to deploy a Ktor application")),Object(o.b)("p",null,"I personally have +4 years of experience using Spring and I wanted to give a try to Ktor which seems promising. Creating a URL shortener is a good way to start."),Object(o.b)("h2",{id:"what-is-a-url-shortener"},"What is a URL shortener?"),Object(o.b)("p",null,"A URL shortener is a simple tool that takes a long URL and turns it into a very short one"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e655859bc2ae5c7371efa36_urlshortener%20image.png",alt:"Flow of URL shortening - from original URL to short URL"}))),Object(o.b)("p",null,"It is commonly used for 3 reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tracking clicks"),Object(o.b)("li",{parentName:"ul"},"Make URL much more concise."),Object(o.b)("li",{parentName:"ul"},"Hide original URL")),Object(o.b)("p",null,"One famous freemium provider is bit.ly (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e655a34bc2ae5452b1f124b_bitly.gif"}),"here"),")"),Object(o.b)("p",null,"In this article we will make a basic bit.ly like URL shortener. Let\u2019s go"),Object(o.b)("h2",{id:"ktor-principles"},"Ktor principles"),Object(o.b)("p",null,"Before starting I want to introduce the 3 main principles of Ktor."),Object(o.b)("h3",{id:"kotlin"},"Kotlin"),Object(o.b)("p",null,"Kotlin is the language used to develop on Ktor. It is an object-oriented and functional language. It is very stable and runs on the JVM. Kotlin is 100% interoperable with Java and allows you to benefit from its ecosystem (libraries, build system, etc.)."),Object(o.b)("h3",{id:"functional-programming"},"Functional programming"),Object(o.b)("p",null,"Ktor leverages the power of Kotlin and has a very functional approach. When writing code, everything seems obvious. It's very similar to what you can see on NodeJS. For me, coming from the Spring world, I find it very efficient to read and use."),Object(o.b)("h3",{id:"asynchronous"},"Asynchronous"),Object(o.b)("p",null,"Kotlin provides asynchronous code execution, thanks to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"}),"coroutines"),". Ktor exploits this feature to its full potential, and even if you have the impression that you are writing code in a blocking manner, this is not the case. Ktor makes your life easier."),Object(o.b)("h2",{id:"http-server"},"HTTP Server"),Object(o.b)("p",null,"Here is a complete and simple example of how to expose an HTTP server (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080"),") with Ktor."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    routing {\n        get("/") {\n            call.respondText("Hello World", contentType = ContentType.Text.Plain)\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"url-encoder"},"URL Encoder"),Object(o.b)("p",null,"The URL encoder will translate an incoming address into a smaller URL. The idea is to provide an ID that will identify the final URL. Using a hash function is perfect for this operation. However, the operation is non-reversible, meaning you can\u2019t retrieve the final URL by the generated identifier."),Object(o.b)("p",null,"Function to transform a long URL into a shorter URL"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// String extension\nfun String.encodeToID(): String {\n    // hash String with MD5\n    val hashBytes = MessageDigest.getInstance("MD5").digest(this.toByteArray(Charsets.UTF_8))\n    // transform to human readable MD5 String\n    val hashString = String.format("%032x", BigInteger(1, hashBytes))\n    // truncate MD5 String\n    val truncatedHashString = hashString.take(6)\n    // return id\n    return truncatedHashString\n}\n')),Object(o.b)("p",null,"We expose the function through the REST API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// Request object\ndata class Request(val url: String) {\n    fun toResponse(): Response = Response(url, url.encodeToID())\n}\n\n// Response object\ndata class Response(val originalURL: String, private val id: String) {\n    val shortURL: String = "http://localhost:8080/$id"\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    install(ContentNegotiation) {\n        jackson {\n            enable(SerializationFeature.INDENT_OUTPUT)\n            propertyNamingStrategy = PropertyNamingStrategy.SNAKE_CASE\n        }\n    }\n\n    // Hash Table Response object by ID\n    val responseByID = mutableMapOf<String, Response>()\n\n    routing {\n        post("/api/v1/encode") {\n            // Deserialize JSON body to Request object\n            val request = call.receive<Request>()\n\n            // find the Response object if it already exists\n            val retrievedResponse = responseByID[request.url.encodeToID()]\n            if (retrievedResponse != null) {\n                // cache hit\n                log.debug("cache hit $retrievedResponse")\n                return@post call.respond(retrievedResponse)\n            }\n\n            // cache miss\n            val response = request.toResponse()\n            responseByID[request.url.encodeToID()] = response\n            log.debug("cache miss $response")\n\n            // Serialize Response object to JSON body\n            call.respond(response)\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"handle-identifier-collision"},"Handle identifier collision"),Object(o.b)("p",null,"Using a hash function makes no guarantee that it is not already being used. If it is in use, then you need to change it to another one. Note: even if the probability to have a collision is very low, you should handle this case."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// String extension (function signature has changed)\nfun String.encodeToID(truncateLength: Int = 6): String {\n    // hash String with MD5\n    val hashBytes = MessageDigest.getInstance("MD5").digest(this.toByteArray(Charsets.UTF_8))\n    // transform to human readable MD5 String\n    val hashString = String.format("%032x", BigInteger(1, hashBytes))\n    // truncate MD5 String\n    val truncatedHashString = hashString.take(truncateLength)\n    // return id\n    return truncatedHashString\n}\n\n//...\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        // ...\n    // Hash Table Response object by id\n    val responseByID = mutableMapOf<String, Response>()\n\n    fun getIdentifier(url: String, truncateLength: Int = 6): String {\n        val id = url.encodeToID()\n\n        val retrievedResponse = responseByID[id]\n        if (retrievedResponse?.originalURL != url) {\n            // collision spotted !\n            return getIdentifier(url, truncateLength + 1)\n        }\n\n        return id\n    }\n\n    routing {\n        post("/api/v1/encode") {\n            // Deserialize JSON body to Request object\n            val request = call.receive<Request>()\n\n            // find the Response object if it already exists\n            val id = getID(request.url)\n            val retrievedResponse = responseByID[id]\n            if (retrievedResponse != null) {\n                // cache hit\n                log.debug("cache hit $retrievedResponse")\n                return@post call.respond(retrievedResponse)\n            }\n\n            // cache miss\n            val response = request.toResponse()\n            responseByID[id] = response\n            log.debug("cache miss $response")\n\n            // Serialize Response object to JSON body\n            call.respond(response)\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"url-decoder"},"URL Decoder"),Object(o.b)("p",null,"Decoding the URL is the process of returning the original URL from the short URL. This is the reverse operation made by the URL Encoder"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"val shortURL = getShortURL(request.url)\nval retrievedResponse = responseByID[shortURL]\nretrievedResponse?.originalURL // return original URL or null\n")),Object(o.b)("h2",{id:"redirect"},"Redirect"),Object(o.b)("p",null,"When a user clicks on a short URL, the user is redirected to the final URL. HTTP protocol allows to do this naturally by returning a 302 status code and a redirection URL."),Object(o.b)("p",null,"With Ktor the redirection is as simple as calling a method with the final URL as a parameter."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'call.respondRedirect("https://www.qovery.com")\n')),Object(o.b)("p",null,"What we expect is that when the user visits ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080/fbc951"}),"http://localhost:8080/fbc951")," he is redirected to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"https://www.qovery.com"),". If the URL is incorrect then redirect to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.google.com"}),"https://www.google.com")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        // ...\n    routing {\n        get("/{id}") {\n            val id = call.parameters["id"]\n            val retrievedResponse = id?.let { responseByID[it] }\n\n            if (id.isNullOrBlank() || retrievedResponse == null) {\n                return@get call.respondRedirect("https://www.google.com")\n            }\n\n            log.debug("redirect to: $retrievedResponse")\n            call.respondRedirect(retrievedResponse.originalURL)\n        }\n        // ...\n    }\n}\n')),Object(o.b)("h2",{id:"stats-clicks-over-time"},"Stats: clicks over time"),Object(o.b)("p",null,"Something that is really useful on products like bit.ly is the stats provided (click over time, referrers, country of visitors). Here is how to store click over time and make them available through the API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// added\ndata class Stat(val clicksOverTime: MutableList<Date> = mutableListOf())\n\n// Response object (modified with Stat)\ndata class Response(val originalURL: String, private val id: String, val stat: Stat = Stat()) {\n    val shortURL: String = "http://localhost:8080/$id"\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n        install(ContentNegotiation) {\n        jackson {\n            // ...\n            // add this line to return Date object as ISO8601 format\n            disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)\n        }\n    }\n        // ...\n    routing {\n            // ...\n        get("/api/v1/url/{id}/stat") {\n            val id = call.parameters["id"]\n            val retrievedResponse = id?.let { responseByID[it] }\n\n            if (id.isNullOrBlank() || retrievedResponse == null) {\n                return@get call.respond(HttpStatusCode.NoContent)\n            }\n\n            call.respond(retrievedResponse.stat)\n        }\n        // ...\n    }\n}\n')),Object(o.b)("h2",{id:"try-the-api"},"Try the API"),Object(o.b)("p",null,"Run the application"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./gradlew run\n//...\n2020-03-12 09:28:08.150 [main] INFO  Application - No ktor.deployment.watch patterns specified, automatic reload is not active\n2020-03-12 09:28:08.606 [main] INFO  Application - Responding at http://0.0.0.0:8080\n")),Object(o.b)("p",null,"Then execute the commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# generate a short URL\n$ curl -X POST -d \'{"url": "https://www.qovery.com"}\' -H "Content-type: application/json" "http://localhost:8080/api/v1/encode"\n{\n  "original_url": "https://www.qovery.com",\n  "stat": {\n    "clicks_over_time": []\n  },\n  "short_url": "http://localhost:8080/fbc951"\n}\n\n# generate 4 fake clicks\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n$ curl -X GET \'http://localhost:8080/fbc951\'\n\n# show stat\n$ curl -X GET \'http://localhost:8080/api/v1/url/fbc951/stat\'\n{\n  "clicks_over_time": [\n    "2020-03-11T21:10:52.354+0000",\n    "2020-03-11T21:10:54.093+0000",\n    "2020-03-11T21:12:34.987+0000",\n    "2020-03-11T21:12:37.223+0000"\n  ]\n}\n')),Object(o.b)("h2",{id:"connect-to-a-postgresql-database-with-exposed"},"Connect to a PostgreSQL database with Exposed"),Object(o.b)("p",null,"By storing the data in memory, we lose all the data every time the application restart. Which is problematic for running in production. To make the data persistent we will store it in a PostgreSQL database. We will have to add 1 new dependency - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JetBrains/Exposed"}),"Exposed"),". Exposed (with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/brettwooldridge/HikariCP"}),"Hikari Connection Pool"),") is a lightweight SQL library on top of JDBC driver for Kotlin. With exposed it is possible to access databases in two flavours: typesafe SQL wrapping DSL and lightweight Data Access Objects (DAO)."),Object(o.b)("p",null,"Add the dependencies to your build.gradle (or POM.xml)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'repositories {\n  jcenter()\n}\n\ndependencies {\n  // Connection Pool and PostgreSQL driver\n  implementation("com.zaxxer:HikariCP:3.4.2")\n  implementation("org.postgresql:postgresql:42.2.11")\n\n  // Exposed\n  implementation("org.jetbrains.exposed:exposed-core:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-dao:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-jdbc:0.22.1")\n  implementation("org.jetbrains.exposed:exposed-java-time:0.22.1")\n}\n')),Object(o.b)("p",null,"We need to have 2 distincts tables, one containing all the final URLs with their correspond identifier"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'object ResponseTable : Table("response") {\n    val id = varchar("id", 32)\n    val originalURL = varchar("original_url", 2048)\n    override val primaryKey: PrimaryKey = PrimaryKey(id)\n}\n')),Object(o.b)("p",null,"And a second one with all the clicking points"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'object ClickOverTimeTable : Table("click_over_time") {\n    val id = integer("id").autoIncrement()\n    val clickDate = datetime("click_date")\n    val response = reference("response_id", onDelete = ReferenceOption.CASCADE, refColumn = ResponseTable.id)\n    override val primaryKey: PrimaryKey = PrimaryKey(id)\n}\n')),Object(o.b)("p",null,"We need to create the tables as defined above programmatically"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun initDatabase() {\n    val config = HikariConfig().apply {\n        jdbcUrl = "jdbc:postgresql://127.0.0.1:5432/exposed"\n        username = "exposed"\n        password = "exposed"\n        driverClassName = "org.postgresql.Driver"\n    }\n\n    Database.connect(HikariDataSource(config))\n\n    transaction {\n        // create tables if they do not exist\n        SchemaUtils.createMissingTablesAndColumns(RequestTable, ClickOverTimeTable)\n    }\n}\n\n@kotlin.jvm.JvmOverloads\nfun Application.module(testing: Boolean = false) {\n    initDatabase()\n    // ...\n}\n')),Object(o.b)("p",null,"We have to replace the Hash Table used to store the data by the PostgreSQL database (see the final code ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/ktor-url-shortener/blob/with_postgresql/src/Application.kt"}),"here"),")"),Object(o.b)("h2",{id:"deploy-in-the-cloud-with-qovery"},"Deploy in the Cloud with Qovery"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," is going to help us to deploy the final application in the Cloud without the need to configure the CI/CD, network, security, load balancing, database and all the DevOps tasks"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Qovery is a Container as a Service platform for developer - developers can deploy their application in the Cloud in just a few seconds")),Object(o.b)("p",null,"Pre-requisites:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Have an account on Qovery (register ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.qovery.com/"}),"here"),")"),Object(o.b)("li",{parentName:"ul"},"Your code need to be hosted on Github"),Object(o.b)("li",{parentName:"ul"},"You need to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apps/qovery/installations/new"}),"accept the Qovery Github app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://ktor.io/quickstart/quickstart/docker.html"}),"Package your Ktor application to build and run it on Docker"))),Object(o.b)("p",null,"To deploy on Qovery 2 files are mandatories"),Object(o.b)("p",null,".qovery.yml - a very simple way to declare the dependencies that you need (e.g: PostgreSQL) and where you want to run it (here on AWS and eu-west-3 / Paris)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'application:\n  name: api\n  project: url-shortener\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\ndatabases:\n  - type: postgresql\n    version: "11.5"\n    name: my-pql-db\nrouters:\n  - name: main\n    routes:\n      - application_name: api\n        paths:\n          - /*\n')),Object(o.b)("p",null,"Dockerfile - to build and run your application on Qovery"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'FROM openjdk:8-jre-alpine\n\nENV APPLICATION_USER ktor\nRUN adduser -D -g \'\' $APPLICATION_USER\n\nRUN mkdir /app\nRUN chown -R $APPLICATION_USER /app\n\nUSER $APPLICATION_USER\n\nCOPY ./build/libs/ktor-url-shortener.jar /app/ktor-url-shortener.jar\nWORKDIR /app\n\nCMD ["java", "-server", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-XX:InitialRAMFraction=2", "-XX:MinRAMFraction=2", "-XX:MaxRAMFraction=2", "-XX:+UseG1GC", "-XX:MaxGCPauseMillis=100", "-XX:+UseStringDeduplication", "-jar", "ktor-url-shortener.jar"]\n')),Object(o.b)("h3",{id:"connect-to-postgresql"},"Connect to PostgreSQL"),Object(o.b)("p",null,"Qovery add dynamically all required environment variables to connect to the database at the runtime of the container."),Object(o.b)("p",null,"To list all of them"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery application env list\n  SCOPE    | KEY                                                          | VALUE\n  BUILT_IN | QOVERY_JSON_B64                                              | <base64>\n  BUILT_IN | QOVERY_BRANCH_NAME                                           | with_postgresql\n  BUILT_IN | QOVERY_IS_PRODUCTION                                         | false\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_NAME                               | my-pql-db\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_TYPE                               | POSTGRESQL\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_VERSION                            | 11.5\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_CONNECTION_URI                     | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_HOST                               | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_FQDN                               | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_PORT                               | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_USERNAME                           | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_PASSWORD                           | <hidden>\n  BUILT_IN | QOVERY_DATABASE_MY_PQL_DB_DATABASE                           | postgres\n  BUILT_IN | QOVERY_APPLICATION_API_HOSTNAME                              | <hidden>\n  BUILT_IN | QOVERY_APPLICATION_API_HOST                                  | <hidden>\n")),Object(o.b)("p",null,"To use them"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun initDatabase() {\n    val config = HikariConfig().apply {\n        jdbcUrl = "jdbc:${System.getenv("QOVERY_DATABASE_MY_PQL_DB_CONNECTION_URI_WITHOUT_CREDENTIALS")}"\n        username = System.getenv("QOVERY_DATABASE_MY_PQL_DB_USERNAME")\n        password = System.getenv("QOVERY_DATABASE_MY_PQL_DB_PASSWORD")\n        driverClassName = "org.postgresql.Driver"\n    }\n\n    Database.connect(HikariDataSource(config))\n\n    transaction {\n        // create tables if they do not exist\n        SchemaUtils.createMissingTablesAndColumns(RequestTable, ClickOverTimeTable)\n    }\n}\n')),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"Deploying your app with Qovery is as simple as commit and push your code."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ git add .qovery.yml Dockerfile\n$ git commit -m "add .qovery.yml and Dockerfile files"\n$ git push -u origin master\n')),Object(o.b)("p",null,"To get the public URL"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status\n  BRANCH NAME     | STATUS  | ENDPOINTS                                   | APPLICATIONS | DATABASES | BROKERS | STORAGE\n  with_postgresql | running | https://qavcgggy6g6dlkbj-main-gtw.qovery.io | 1            | 1         | 0       | 0\n\n  APPLICATION NAME | STATUS  | ENDPOINT                                                | DATABASES | BROKERS | STORAGE\n  api              | running | https://ete6bq97amj9n82c-qavcgggy6g6dlkbj-app.qovery.io | 1         | 0       | 0\n\n  DATABASE NAME | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\n  my-pql-db     | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | api\n")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"We have seen that creating an URL shortener API with Ktor and Kotlin is extremely simple. The connection of the application with the PostgreSQL database is done in a very easy way with the Exposed library. In just a few lines of code the service is fully functional, and can be deployed in production very quickly with the help of Qovery. In the next part we will see how to create a web interface connecting to this API to convert our URLs without using the curl command."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Part 2: bind a web interface to the API")," - ","[link coming soon]"),Object(o.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}d.isMDXComponent=!0},222:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(h,l({ref:t},c,{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),l=n(229),s=n(29),c=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,d=Object(l.a)(p),u=Object(r.useRef)(!1),b=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!b&&d&&window.docusaurus.prefetch(p),function(){b&&t&&t.disconnect()}}),[p,b,d]),p&&d?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(p),u.current=!0)},innerRef:function(e){var n,a;b&&e&&d&&(n=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:p})):o.a.createElement("a",Object(a.a)({},e,{href:p}))}},228:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(225),i=n(222),l=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,s=e.rightIcon,c=e.size,p=e.target,d=e.to,u=l()("jump-to","jump-to--"+c,n),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:d,target:p,className:u},b):r.a.createElement(o.a,{to:d,className:u},b)}},229:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
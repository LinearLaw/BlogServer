#   INTRODUCE

#   REGULAR
##  response

    Response json data like this

        res.send({
            status:1,
            content:"success",
            data:result[0]
        })

##  status

*   0   There is no such data in database.
*   1   Success.
*   2   A field is required but missing in request.
*   3   User no auth , request forbidden.
*   4   Backup status , not used for now.

#   BLOG

##  Blog GET

*   /getBlogList
*   /getBlogDetail
*   /deleteBlog

##  Blog POST

*   /reportBlog

#   COMMENT

##  Comment GET
##  Comment POST
# ActiveStorage & Bootstrap

## Objective
- Utilize `ActiveStorage` to handle file storage
- Understand how to handle one or many images
- Implement `ImageMagick` to resize our images to fit according to specifications
- Enhance application's style with Bootstrap


## ActiveStorage

ActiveStorage is a way for us to facilitate the storage of files onto different
service providers (AWS, Azure, etc.) and create relationships within our database. Majority of the steps followed can be all found [through the documentation](https://edgeguides.rubyonrails.org/active_storage_overview.html).

- Mostly what we have to do to get started is `rails active_storage:install`
  - This will generate a set of migrations for us to take advantage for relating
  any data to something else.
- We can take advantage of the new methods available for us that relates that
the models whether there are one or many files
  - `has_one_attached :file`, we just need to name the method whatever they use
  within the form
  - `has_many_attached :images`, just like the former, we need to use this name
  within the form


One thing to note is that you cannot **preview** an image. You must use a file like
PDF/video. However, you are able to see if it is a variable type (for an image)

# ng2-wordpress
Set of Angular2 components for WordPress.

## Components

### [ ] wp-posts

```
<wp-posts [items]="posts"></wp-posts>
```

### [ ] wp-post

```
<wp-post [item]="post"></wp-post>
```

### [ ] wp-pages

```
<wp-pages [items]="pages"></wp-pages>
```

### [ ] wp-page

```
<wp-page [item]="page"></wp-page>
```

### [ ] wp-comments

```
<wp-comments [items]="comments"></wp-comments>
```

### [ ] wp-comment

```
<wp-comment [item]="comment"></wp-comment>
```

### [ ] wp-types

```
<wp-types [items]="types"></wp-types>
```

### [ ] wp-type

```
<wp-type [item]="type"></wp-type>
```

### [ ] wp-media

```
<wp-media [items]="media"></wp-media>
```

### [ ] wp-media-item

```
<wp-media-item [item]="wpMediaItem"></wp-media-item>
```

### [ ] wp-users

```
<wp-users [items]="users"></wp-users>
```

### [ ] wp-user

```
<wp-user [item]="user"></wp-user>
```

### [ ] wp-taxonomies

```
<wp-taxonomies [items]="taxonomies"></wp-taxonomies>
```

### [ ] wp-taxonomy

```
<wp-taxonomy [item]="taxonomy"></wp-taxonomy>
```

### [ ] wp-statuses

```
<wp-statuses [items]="statuses"></wp-statuses>
```

### [ ] wp-status

```
<wp-status [item]="status"></wp-status>
```

### [ ] wp-terms

```
<wp-terms [items]="terms"></wp-terms>
```

### [ ] wp-term

```
<wp-term [item]="term"></wp-term>
```

### [ ] wp-custom

```
<wp-custom [items]="custom"></wp-custom>
```

## Containers

You can also use redux to store the WordPress data.

```
npm install --save ng2-redux redux
```

with the `container` pattern your components are plug and play, what you need to do is to wrap your app with `<wp-provider>`.

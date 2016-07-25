# ionic-wordpress
Set of Ionic2 components for WordPress.

## Components

### [ ] ion-wp-posts

```
<ion-wp-posts [items]="posts"></ion-wp-posts>
```

### [ ] ion-wp-post

```
<ion-wp-post [item]="post"></ion-wp-post>
```

### [ ] ion-wp-pages

```
<ion-wp-pages [items]="pages"></ion-wp-pages>
```

### [ ] ion-wp-page

```
<ion-wp-page [item]="page"></ion-wp-page>
```

### [ ] ion-wp-comments

```
<ion-wp-comments [items]="comments"></ion-wp-comments>
```

### [ ] ion-wp-comment

```
<ion-wp-comment [item]="comment"></ion-wp-comment>
```

### [ ] ion-wp-types

```
<ion-wp-types [items]="types"></ion-wp-types>
```

### [ ] ion-wp-type

```
<ion-wp-type [item]="type"></ion-wp-type>
```

### [ ] ion-wp-media

```
<ion-wp-media [items]="media"></ion-wp-media>
```

### [ ] ion-wp-media-item

```
<ion-wp-media-item [item]="wpMediaItem"></ion-wp-media-item>
```

### [ ] ion-wp-users

```
<ion-wp-users [items]="users"></ion-wp-users>
```

### [ ] ion-wp-user

```
<ion-wp-user [item]="user"></ion-wp-user>
```

### [ ] ion-wp-taxonomies

```
<ion-wp-taxonomies [items]="taxonomies"></ion-wp-taxonomies>
```

### [ ] ion-wp-taxonomy

```
<ion-wp-taxonomy [item]="taxonomy"></ion-wp-taxonomy>
```

### [ ] ion-wp-statuses

```
<ion-wp-statuses [items]="statuses"></ion-wp-statuses>
```

### [ ] ion-wp-status

```
<ion-wp-status [item]="status"></ion-wp-status>
```

### [ ] ion-wp-terms

```
<ion-wp-terms [items]="terms"></ion-wp-terms>
```

### [ ] ion-wp-term

```
<ion-wp-term [item]="term"></ion-wp-term>
```

### [ ] ion-wp-custom

```
<ion-wp-custom [items]="custom"></ion-wp-custom>
```

## Containers

You can also use redux to store the WordPress data.

```
npm install --save ng2-redux redux
```

with the `container` pattern your components are plug and play, what you need to do is to wrap your app with `<ion-wp-provider>`.

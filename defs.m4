define(`pagestart', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="site.css">
    <link rel="shortcut icon" href="profile.png">
    <title>Aleks Rūtiņš</title>
</head>

<body>
')

define(`page_section', `
<section id="$1">
    <div class="content">
        <div class="column-left slide slide-left">
            $2
        </div>
        <div class="column-right">
            $3
        </div>
    </div>
    $4
</section>
')
define(`page_section_content_only', `
<section id="$1">
    <div class="content">
        <div>
            $2
        </div>
    </div>
    $3
</section>
')

define(`section_heading', `<h1 class="slide slide-top">$1</h1>')
define(`section_content', `<div class="slide slide-bottom">$1</div>')
define(`languages_bar', `<gh-language-bar owner="$1" repo="$2"></gh-language-bar>')
define(`please_scroll', `
<div class="please-scroll slide slide-bottom">
    <p>Scroll</p>
    <p class="arrow">&darr;</p>
</div>
')
define(`pageend', `
<script src="site.js" type="module"></script>
</body>
</html>
')
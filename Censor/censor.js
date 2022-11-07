function censor(text)
{
    var censored = "";

    for (var i = 0; i < text.length; i++)
    {
        if (text[i] != " ")
        {
            censored += "*";
        }
        else
        {
            censored += text[i];
        }
    }
    return censored;
}

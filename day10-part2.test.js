const t = require('./day10-part2')

test('day 10 part 2', () => {
  expect(t(`[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`)).toBe(288957)

  console.log(t(`[<([((<(<<{{{[{}[]][<>{}]}[{[]()}{[]<>}]}<({(){}}<()<>>](<{}<>><[]<>>)>}<<[<<><>>[()<>]]{({}<>)
<([{<<{[{{{[[{{}[]}(<>[])]{[[]<>]>]<[[<><>]([]<>)]{<{}<>>{{}<>}}>}[<((<>())[[]{}])>[<{[][]}<{
[{{[{([[[[{[{((){})(()<>)}{([]())}][(({}{})[[]()]){(<>{})<()<>>}]}][[{<{[]{}}[{}()]>[[{}<>](<>{})]}[
[{[<[(([{[<(<{{}{}}([]<>)>)>([[[[]{}]<(){}>](<{}[]>[[]{}])]({<{}{}>}<{[]()}([][])>))]}{{[[[<[]{}>([]())]{{
{(<[<{(<[(({([{}[]]({}{}))<{()[]}([][])>})([[<{}[]>([])][<[]{}><<><>>]][[<<>[]><(){}>](({}{}){<>()})]))
<{(<[[([[[{<[({}[])<()()>]>}[[{<<>()><{}()>}[<<>{}><[]<>>]]]][(<({[]}([][]))><(<{}{}>){({}())[[]{}]}>){[[
(<(<(((<<{[<[{[]{}}({}{}>]><[<()<>><{}{}>][{()<>}({}())]>]}({<[[[]()]{[]<>}](<[]<>>([]<>))>[{(<><>)([][])}]
<{[[{({<([[<{(<>())[<>[]]}><({[]{}}<<>>)[((){})[[]()]]>]]({<<(<><>)[{}<>]>{[{}{}](()[])}>([([]<>){()
(((<{{{{<<[<([[]<>])({()<>}[{}<>])>(<{<>()}>{[{}<>]})]><[[([[]{}]{{}()})(([]){(){}})]{[{<>{}}<<>{}>
[{((({[[([[[{{[]<>}(<>[])}[([]{})([][])}]<[(<><>){[][]}]{<{}{}>(()())}>]]<([<{{}()}{{}<>}>[(
{(<{[[{(<[[{{[(){}](()[])}}<[(<>{}){[][]}]{<<><>>{{}()}}>][{{{()}<()()>}{<<>()>(()[])}}]]>[{<({[<>
(([([([(([<([([][])<()()>]<({}()]({}())>)>{[{<[][]>(<>{})}<{{}{}}(<>{})>]<{([]())(<>{})}[{<>{}}[()()]]
{<<<{[({(<({(<{}()>){[<>()](()<>)}})<[<{()[]}{<><>}>]{[[(){}]({}<>)][<<>{}><{}<>>]}>><(([<{}[]>(<>
{[[([[([{[(<<(<>[]){{}}><([]<>)<()<>>>><([(){}](<>{}))[{[]}<{}<>>]>)][{{(({}())[[]{}])}{([()<>][[]<>]){<[][]>
{([{(({<<{<{{(<>())[{}{}]}{(()[])[[]<>]}}>}>[<{(<[[]()]<{}()>>)<{((){}]((){})}[[{}]([]{})]>}([({
(([(<({[<({{<{<>[]}<<>{}>](([]()))}<(<{}()>(<>))<((){})[<>{}]>>})({[[<()<>>][<()<>>[<><>]]](({
<<((<<{[{(<<<{{}{}}[{}<>])(<<>()>[[][]])>>([({()[]}[<>{}]){[{}<>]{()<>}}]{(<{}{}>[<>[]])[{<>[]}<[]{
([{(<<{{<{<<<<()<>>([][])>(([]()){()})><{[{}()]{<>{}}}<{()<>}<()[]]>>>}{<<<{()}((){})>[[{}()][<>]]>>[
<[(<<<([{{{((<()>(<>{}))<([]<>)(<>())>){([(){}]<()()>)}}{{[[()[]](()<>)]{(<>()){()()}}}<[({}()){[]<>}][<{}[
(<{{({({({[{([()<>])[{<>{}}]}{<([]())[[]<>]>([()()]{[]<>})}]{(<[{}()]<<>()>>[<<>())<()[]>])[({()()}[[]
<({<({[{(({{{<{}()>[(){}]}{({}<>)<[]{}>}}<<<{}[]>([]<>)>[(()())[()<>]]>}<(<[[]{}]([]())>([(){}]<[][]
{(((<(<{{{<[[{[][]}]<{[]{})[{}()]>]<[<{}<>>][[[]()](()<>)]>>}([([{{}[]}[<>[]]][(<>{}){[]()}])({[{}[]][<>
{{({(<{{(([<(<()<>>{(){}})>[<{()()}[<>{}]>[<<>{}>{[][]}]]]({{<<><>><[][]>}[[<>()]<[]()>>}<<(()())[[]<>]><{<
<{(<([{[{<[[[(<>)({}{})]]((<()<>>))]{{{(()<>)([])}}[{{{}()}{<>[]}}[{[]{}}{<><>}]]}>}][<[<[<[(){}]><({}[])<<>{
<({[[<<([(<{[<[]<>>[{}<>]](({}[]))}{{[{}<>]}([[]{}]([]{}))}>[[{<[]<>)<{}>}{{(){}}{()}}]([(<>{})]<<[]()>
{(([{<{(((<<<(()[])([]())>[<<>{}>({}[]]]>>[[([[]<>]<{}[]>)<[<>[]]{(){}}>][((<>[])(()[]))]]))(([{<{<>}{{}<>
<[((([<{{([{({<>{}}(<><>)){([]{})<()[]>}}({[[][]]([]{})}({[]<>}))][<<[<>{}]([][])>(<{}<>>[(
<[{{[{{<{[[([<<><>>]{({}())([]<>)})]]}[<({([{}{}]{[]})({()()}[(){}])}[{<(){}><{}[]>}])<[[<[]{}>
(<(<{<{<{([([<<><>>]({[]}[()[]])){<{<>()}<()[]>>[([]{}){{}[]}]}]{{({[]()}{<><>})([{}()](()()))}<[<[][]>][<[]
{[{{<[(<(<{<{{<><>}{{}{}}}([()()])>[<<{}>[()()]>[[()()]{[][]}]]}>)[<<<<<[]()><(){}>>[[<>()]<{}{}>]>[{{
([{(<({((([<(<()()><[]()>)({{}()}{<>()})>{[({}[]){{}[]}]{{{}()}{{}<>}}}])(<[{((){}){[][]}}([[]()])]{<{()<>
((<<[{<[(([({(()<>)[{}{}]}{<{}[]><[]<>>})<[<()>]([()<>])>]{((<[]{}><()<>>)<{{}><<>>>)[(<{}()>)<[[]()](
({<([[<{[{[[{{{}<>}({}())}<[<>()][{}[]]]][[{[]<>}]<([]{})[{}()]>]]}]([{[(<[]{}>[{}[]])]}]{((<[{}
<[(<{<[<<({<<{<><>}(()())>)}{(({(){}}){[{}[]]{{}{}}})})>>]>}<[<{(<<[(<()<>>[[]()]){{{}<>}<[][]>}][(<(
({([(<{[{[{<({<>{}}<()[]>)>{[(<><>){{}<>}]}}]}]}[([[{[[[[]{}]][([][]){<>{}}]][[{[][]}(<>[])]
[<([<[([[{{({{<>{}}[{}[]]}([()()]({})))((<(){}>)([[]())({}<>)))}}]])]>{<<(({{<[<{}[]>[()<>]]>}}([[{({}<>)
<{[{<[<([{(<{<<>{}><<>()>}[(<>[])[<><>]]>[(((){}))<(<>){{}[]}>]){(<({}{})[{}{}]}<<[]{}><{}<>>>
{[[{<{[<<<(<<(<><>)<[][]>>{[<>{}]{()<>}}>{{{[]<>}<<>()>}}){(<{<>()}(()<>)>{{{}[]}(()())})]>>({(([<{}()>([]{
[<({(({<<{<<{<<>>{<><>}}((<>{})({}()))>([({}())([][])][{{}{}}<[]<>>])>}((<<<(){}>{{}()}>[{<>()}({}{
<([[[{[(({([{<()<>>}]{(([]<>)[()<>])}){<[{()()}[<><>]]([<><>][{}[]])>{({{}{}}){<{}[]><<><>>}}}}{<({<()<>
<[<((<[[<({{[{<><>}{{}{}}]{<{}{}><(){}>}}{{[[]{}][<>[]]}([<><>][{}()])}}({{{<>()}<<>{}>}([{}]{
{[(<({[{<<{<{{()[]}({}())}{{{}()}<()>}>[<([]{})<<>{}>><{{}()}{{}{}}>]}<{({[][]}{{}[]})}<<{<>{}}[[][]]>>>>
<{[<([(<<([[(<[]<>><{}()>)<({}<>){(){}}>]]<<[(<>{}){{}<>}]([[]{}]({}{}))>>)>{[{[<<[]><{}<>>>(({}{}))
{(<<{{{((<<[({[][]})[([]())(<>{})]][((()<>)([][]))}><([[()[]]]){<<[][]>><<{}[]>[(){}]>}>>[([{[[]<
<{(<<<{{((<{{<{}()>[<>()]}({<>{}}[(){}])}[{({}<>)(()[])}<{(){}}<{}{}>>]>{{[[[]{}]<[][]>]{[{}{}][[]<>]}
{(<(<([{<([<{{<>}<<>{}>}{<()[]>[[]()]}>{<[()()]({}{})>((<>{}))}][{<{[]}[[]()]>{{<>}[[]<>]}}({<<>{}>[[][]]}{<
{((<[<<[{<{[{{{}<>}}<[<>()]([]())>]([<()()><()()>]{[()<>]{[]()}})}<{([[]()]{<>})}(<<[]{}}{[][
[{{{<<<[{[(<[{[]{}}{(){}}}(<()>[[][]])>{{(<><>)<<>()>}<<<>{}>(())>})]{<(<<[]()>({}())><[{}<>]{[]()}>)><
{{[[[({((({{({{}()}<()()>)}{(<{}{}>{()<>})[(()<>)<<><>>]}}<[<[{}[]][()<>]>[[(){}][()()]]>{<{<>[]}[
[<[([{[{[{[{({(){}})}[[<[]{}>{<>()}]]]<[<{<>()}[<><>]>[{<>[]}<()()>]][<{[]{}}({}())>{<[]()>{{}()}}]>
<([{({<(({<{<[[]{}]({}[])>[[<>[]]<<>[]>]}>}{(({(()[])[[]()]})<[[{}<>][<>{}]]<[[]()]([])>>)}))[([[([([][])[<
{<{[([(({<(<{{<>[]}[[]<>]}<(<><>)[[]{}]>>{{{{}()}((){})}))<[{[{}{}]([]{})}{([]())(<>{})}][<(()[])
([[[([<[[{{((<{}{}>(<>()))[({}[]){<>{}}])}}[[(({{}{}}(()[]))<[<>{}]<()<>>>)]<({<()<>>}{{{}<>}{(
(<([{[{<[{[<<<{}()}{{}<>}>({(){}}<[][]>)><{<<>[]>((){})}>](<([()()])[([])({}{})]>[[<{}[]>(<>
([(<{<([{{[[[({}{})[(){}]]]([(()<>)[<>[]]][<{}{}>])][<[<<>[]>[(){}]][[{}[]](<>[])]>({{{}[]>([]{})}[{[][]}[{}
{<[(<[({[<({[({}[])]<{{}<>}[{}()]>}<{{{}{}}[[]]}<(()())[[]<>]>>)>{[{[(<>{})[<>{}]]<({}<>)((){})
{[{[<<<[([[[<{[]{}}[<>()]>(([][])({}[]))]<[[<>()]{<>()}]<[()[]]{[]()}>>]](<{<[()[]]>{({}{})}}(<<[]<>><[]<>>
({[<{{<<({<(<[{}{}]>)[(<{}{}>[[]{}]){<{}()>{<>[]}}]>(({<<><>><<><>>}({[][]}))[[{{}}([]{})]])}[({(<{}[]>{()<>}
({{{{{{[<[<([([]){{}[]}][([]{})])(<([]{})(<>{})><[<>](()())>)>{(([[]()](()())))}]{[[({()[]}{<>(
(({{[<[[[((<{(()<>)[[]{}]}([[]()]{<><>})>))((<{{(){}}(<>())}(<<><>><[]{}>)>(({()()}[{}[]])))<([<<>><()[]>])<
<[[{<({[((<<({{}()}{<><>})<<()[]>[{}()]>>><(<[[][]][()]><[()[]]>)>>){{<((({}<>)(()))(<{}()>)
{<{[([{<{<([{[<>{}][{}{}]}[([]())[[]<>]]]{([<><>]<<>{}})}){[(([][]){<><>}){<<>{}>[()[]]}]<(<()()>{{}})<([]
<{<{<([[[[{[({[][]}<[]{}>){[<>{}]{[]}}]}([[(<>[])][(<><>)<<>{}>]]<([()<>][()()])[<[]()><<>
(<((({{{<([{<[()()]{[]()}>[{{}{}}[()[]]]}]{[(<()<>><[]{}>)<<{}()>[<>[]]}]([[()()]]{(()<>)})}){<{{({}())(
[[[[(([{[(((((<>()){{}{}})(<[]()>({}<>)))<<<()>([]>>((()<>)[<><>])>)([[<()[]><{}()>]{{[][]}([]<
[[{([(<((<[[(([]<>)({}[]))<(())>]]>))>(<([[<{((){})<<>{}>}>{{<()()>[<>[]]}([[]{}]{[][]})}]])[<[<
((([[(<(<[<((<{}()>({}[]))<<<>[]>[()[]]>)([((){})({}())])>][<[(<()()>{{}{}}){<{}<>>{()[]}}]>{[{{{}(
{<(([((<[({<<{<>[]}[[]()]>>([<{}{}]({}())]([()()]<{}<>>))}({[<()()>{[]{}}]((()<>)<()()>)}))([<[[<><>
<[{[<{({([{([({}<>)({}{}>])<([{}{}][()[]])<([]())>>}[{<(<>{})((){})><[<><>](()[])>}<<{<>{}}([])><({}(
({{<<<(([<{<<([]<>)[<>]][{[]{}}{(){}}]>{(({}{}){()<>})}}[({<{}()><(){}>}{([]{})[<>[]]})<[{<>
(<<(<[({[<({<<()<>>({}<>)>})<({<()()><{}{}>}[{(){}}[<><>]]){(({}())<{}<>>)<<(){}>({}<>)>}>>((((<<
[{{{({[{([<<<(<><>)<{}<>>>{{[]()}[()[]]}>{[<<>{}><<>[]>]{[[]{}][()<>]}}>{<<[()<>]><([]{}){<><>}>>[{{{}()}{()[
[[{{(<[[{<<[<[{}{}][{}{}]>>({[(){}]<{}{}>}(((){})[<>[]]))>>}((({<(()<>){{}{}}>{<()[]>[{}[]]}}
(((<{{<{[<<[{{[][]}{[][]}}]{[{[]<>}{()}]}>{{[[[]<>]<(){}>]<[[]()][[]()]>}[<<[]<>>(<>}>{(()<>)<()()>}]}>[
([[{[({{{{[(<<()<>>(<>[])>[(()())<[]{}>])]<{{(<><>)(()<>)}([<><>]<(){}>>}>}[<{({(){}}<()<>>){(<><
{({<{[(<{(({<[[]{}](()())>(((){}))})<(<{<>()}<{}>>{<()()>([]{})})([[<>[]]{[]()}][{<>[]}[{}[]]])>)<{<(<{}()>
{(({[{<{<({{(<[]{}><{}()>)[{{}<>}]}})(<{([()()]{()<>})<{<>()}<[]()>>}<([()[]]([]{}))<{{}{}}<<>[])>>>{({[[]{
<<{{([([[[{<{[<>()]]>{<[[]{}]((){})>{{<>{}}<{}<>>}}}{{{<<>{}>({}<>)}[<(){}><{}()>]}([<{}<>>(<>[])
[{<[<{{{{<({{<{}()>{{}<>}}})[(<{<>[]}{<>()}>[(<>())<()>])<<{()[]}<<>()>>{([]<>>}>]><({[[{}[]]
[{{<(<({(<{[<[<>[]]{()<>}><(<>[]){{}}>]{<<<>{}>[<>{}]><[[]<>]{<>()})}}>)}[[({{<[()()][(){}]>((()[])(
[[[[[[[[<<([<[()[]](<><>)><(<>[])<<>{}>>])><{[<<<>{}><{}()>>({[][]}<[]{}>)]([{<>()}{{}[]}]{{{}{}}{[]()}}
<(((<(([<{(<[[[][]]{()[]}]<(<>{}){[]{}}>>)}>]))[({[<<{(<()[]>([]<>))[<()[]>{()[]}]}<([<><>](<>[]))((<>()
<{{{<{{{[[{([({}{})<[][]>]<[<>{}]{<>()}>)}<({{[]<>}([]())}<<<>[]><<>{}>>){(<[]><(){}>)>>]{{(<([]<>)([](
<[<{[<{{([(({(<>())}{[<>[]](()<>)})([([][]){<>()}][<[]<>>{[]{}}]))])}([{{(<{<>()}[()<>])((
{{[({[[{([<<{<()()>[()[]]}{<<>{}>{{}()}}>>]<{<[<{}()>{[][]}][{[][]}[<><>>]>}>)}]][<((({({([]{})
[(<[([<{[[{{<{{}[]}({}())>([{}[]]{[]})}([([]())<<><>>]<(())<<>>>)}[<[(<>{}){{}<>}]{{()<>}[<>{
{{[{[<([{<[((<(){}><()[]>){[{}]({}<>)})(([()[]]<<>[]>)<[(){}]>]]{({[<>()][<>[]]}({[]{}}{{}[]}))[[[(){}][[]{}
{[<<<[<[{[<((<[]{}>)<([]<>){{}<>}>)<{([]())({}{})}>>](<([(<><>)[[]<>]]<{<><>}{()[]}>)>[(<<<>()><()[]>>
<[<((<<(<{(({<{}<>>{{}<>}}{<[]()>{<>{}}})){<[(<><>)<()<>>]>[{{<>{}}<(){}>}<{<><>}({}())>]}}>)>[[{<[[
[([((<<([<{<[[()()]][[{}[]]]>{{(<>{})<<>()>][{[]()}]}}>])<([{<({{}()}<<>{}>)><[[()]<()[]>][[()<>](<>
{{((<[(({<[<[<[]<>>[(){}]](<[]<>><{}[]>)>][({{[]()}{<>[]}}{(()[]){<><>}})<[<{}[]>]>]>}<{[{{{<>[]}{{}()}}{{<>
({{({{{{{{[<[({}())[<><>]]>[(<<>[]>((){}))]]{{(<<>()>[{}[]])[{<>{}}<{}[]>]}{({{}()})}}}[[({{{}<>}<()()>}({()
[<<[((({<<<(({(){}}({}{})){<<>{}>{{}{}}}]((<[][]>{<>[]}))>>{[[([()()])<[()[]]{[]<>}>][(<<>()>({}[]))<({}[]
{(<<(<{({<<[[(<><>){(){}}][([]())([][])]](<<<>()>[[][]]>[({}{})[()<>]])>((<[[]<>]<{}()>>){<([][])[[]<>
<([{<[({{{[<{{()<>}(<><>)}{<{}()>[{}<>]}>{{[{}{}]<<>>}<[<>()]<<>[]>>}]{<<([][]){[]()}>[<{}()><()()>]>[
(<<[[<(<{[<(([()<>]<()<>>){[{}[]][{}()]})<[[<><>]<[]>]<[[]()]{[]{}}>>>}<[[[<{}{}>(<>())]]{({<>{}}([
[(([<(<(([(<<<{}{}>[[]()]>[<[][]>{[]}]><<<<>()>[[]{}]>([[][]]{<>()})>)(({<<><>>[()()]}))]))>((({((
<<[[<{{({[{({(<><>)(()<>)}[[<><>]])[({<><>}([][]))[[[]()]([]{})]]}]<{({(<>{})[(){}]}({()<>}))([{(
({[<<<<[<(<[<[[]<>]([]<>)>{<(){}><[]()>}]{[(()<>)(()())][{(){}}[<>]]}>)>][(([({([][])<[][]>][{(){}}({})])<<{[
<<({[(<{<(<({<[]<>>{()()}})<{<()[]>[[]()]}(((){}){<>})>>){[[<[{}()]>][{[(){}]({}[])}<[<>[]](<><>)>]]({(<<
<[([[(<<({(<<({}())]>{[[[]<>][[]()]]})<<{([]())[[]<>]}<(())<{}<>>>>{(([]{}){<>{}}){[{}()][(){}]}}>})><
{(<{{[{<({[[[[{}()]({}[])]({()()}{{}[]})]{<[(){}]>([{}()]{{}{}})}](<{<{}[]>[{}[]]}((()[]){<>{}})>([{[]{
<[(<({<(<[<{<([]<>)<<><>>>([<><>])}>]{([{(<><>)(<>())}[{()()}{(){}}]]){{{([]{}}{{}[]}}<{<>[]}[[
<[<[[{([<({([<[]()><[]<>>])[([[]<>]{{}})]}<<<<[]<>>(()[])>({()()}<<>[]>)>[<{[]<>}>({()()}(()<>))]>)({(
{{<[(<{{{<[<(([]<>}[<>{}])><<<<>{}>([]())>[([][])]>]>}}}>)]>(({(<{<<<(({()}<[][]>)[<[]>{<><>}
({{[<[({[[{({{{}[])}<[<>[]][<><>]>)<{{[]{}}{{}[]}}>}]<((<(<>()){()}>)(<[{}()]{<><>}>(<()()>{()[]})`))
})

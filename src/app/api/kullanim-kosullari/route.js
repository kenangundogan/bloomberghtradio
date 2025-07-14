import { NextResponse } from 'next/server';

export async function GET() {
    const data = {
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Kullanım Koşulları",
            description: "Kullanım Koşulları",
            keywords: "Kullanım Koşulları",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Kullanım Koşulları",
                        url: "/kullanim-kosullari"
                    }
                ]
            },
            image: {
                url: "/assets/images/share/default.jpg",
                width: 1920,
                height: 1005,
                type: "image/jpeg"
            },
            url: {
                host: "www.bloomberghtradyo.com",
                hostname: "bloomberghtradyo.com",
                href: "https://www.bloomberghtradyo.com/kullanim-kosullari",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/kullanim-kosullari",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/kullanim-kosullari",
            },
            tracking: {
                googleTagManagerID: "GTM-1234567890",
                googleAnalyticsID: "G-1234567890",
                gemiusID: "1234567890"
            },
            date: {
                created: "2025-04-04",
                updated: "2025-04-04",
                published: "2025-04-04"
            },
            generator: {
                datetime: "2025-04-04",
                ip: "127.0.0.1",
            }
        },
        body: {
            type: "kullanim-kosullari",
            title: "Kullanım Koşulları",
            status: "active",
            content: [
                {
                    "id": "header2",
                    "type": "header",
                    "data": {
                        "text": "1. Genel Hükümler",
                        "level": 1
                    }
                },
                {
                    "id": "para1",
                    "type": "paragraph",
                    "data": {
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec volutpat nisl. Aenean molestie felis felis. Duis vehicula vitae augue ut consequat. Integer at feugiat est. Vivamus vehicula eros sed tortor sagittis, non pulvinar mi posuere. Nam sit amet gravida lectus. Proin pretium tortor id sapien fermentum, ut consectetur lacus tincidunt. Mauris in dignissim leo, eget mattis libero. Cras tincidunt luctus tortor id sagittis. Proin non purus ut lacus viverra porta eget a augue. Donec sit amet sem pharetra, malesuada ipsum vitae, faucibus nulla."
                    }
                },
                {
                    "id": "para2",
                    "type": "paragraph",
                    "data": {
                        "text": "Vestibulum vel mi lacinia, posuere orci non, <b>pellentesque</b> tellus. Duis varius <small>ligula</small> sit amet auctor lacinia. Vestibulum at sollicitudin nibh. <del>Curabitur</del> ut lectus vel purus eleifend pellentesque. In hac habitasse platea <ins>dictumst</ins>. Phasellus sed dolor leo. Quisque ac bibendum <sub>erat.</sub> Praesent blandit, purus nec <sup>tempus</sup> ultrices, massa ligula sagittis diam, quis auctor felis urna sit amet velit. Curabitur luctus risus ut tincidunt pretium. Morbi ut convallis odio. Phasellus a nibh tincidunt, feugiat nisl rhoncus, congue augue. Proin imperdiet sagittis quam, ut aliquam urna semper sed. Cras rutrum vitae tortor ac laoreet. Donec nec quam velit. Etiam venenatis risus a tristique condimentum."
                    }
                },
                {
                    "id": "para3",
                    "type": "paragraph",
                    "data": {
                        "text": "Cras luctus nunc sed quam lobortis viverra. Praesent commodo, urna tincidunt lobortis commodo, nibh turpis vehicula tellus, non fermentum ipsum lectus vel orci. Aliquam elementum quam eu fermentum scelerisque. Aenean imperdiet tortor eu pulvinar sodales. Nulla euismod augue eu nisi semper, id scelerisque augue venenatis. Sed varius, quam sit amet suscipit scelerisque, lectus magna porttitor lorem, sed interdum velit massa at mi. Vestibulum non mollis nisi, et elementum magna. Fusce imperdiet ut erat ut vulputate."
                    }
                },
                {
                    "id": "para4",
                    "type": "paragraph",
                    "data": {
                        "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    }
                },
                {
                    "id": "para5",
                    "type": "paragraph",
                    "data": {
                        "text": "Nullam ac gravida lorem. Curabitur elementum, tortor in tristique vestibulum, elit lorem porttitor urna, in tincidunt orci ipsum a ante. Donec porttitor sapien quis fermentum luctus. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eros lorem, placerat ac dui vel, suscipit tincidunt nisi. Suspendisse massa arcu, tempus a ornare vel, congue nec risus. Integer nisi massa, auctor in aliquet non, pharetra eget risus. Vestibulum sed urna vel mi facilisis faucibus non non magna. Fusce placerat nibh quis lorem convallis, luctus vulputate nisi eleifend. Nullam suscipit, sapien vel dignissim pulvinar, massa leo laoreet ligula, non fermentum orci ex eget enim. Nam sed leo nunc. Sed et posuere neque."
                    }
                },
                {
                    "id": "para6",
                    "type": "paragraph",
                    "data": {
                        "text": "Nunc maximus id arcu ac luctus. <b>Duis</b> et erat <i>tristique</i>, vehicula nibh ac, venenatis lacus. Pellentesque in orci <mark>pulvinar</mark>, maximus lacus nec, placerat turpis. Vestibulum aliquet rhoncus tellus, id facilisis felis pellentesque quis. Praesent interdum in massa in rhoncus. Curabitur enim est, ullamcorper iaculis augue at, imperdiet viverra augue. Maecenas ut est et felis malesuada volutpat tincidunt viverra tellus. Aliquam erat volutpat. Fusce sit amet feugiat neque. Nunc bibendum diam at massa gravida sagittis. Praesent accumsan orci dolor, in porttitor lacus lacinia nec. Fusce ac posuere nisl. Aenean lobortis, turpis ac tempor hendrerit, eros sem accumsan arcu, eleifend auctor lacus lorem ac eros. Etiam facilisis tincidunt quam, vel rutrum arcu lacinia nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nisl eu velit semper sagittis."
                    }
                },
                {
                    "id": "header2123",
                    "type": "header",
                    "data": {
                        "text": "Lorem Ipsum",
                        "level": 2
                    }
                },
                {
                    "id": "para7",
                    "type": "paragraph",
                    "data": {
                        "text": "Sed sed est mi. Integer volutpat vitae est eget <u>efficitur</u>. Proin ut magna suscipit, pellentesque quam id, posuere diam. Donec orci velit, dignissim ultricies dictum id, sagittis at odio. Pellentesque ut felis sit amet justo posuere posuere in sed leo. Vivamus elementum massa suscipit neque dictum mollis. Ut a turpis eu purus fermentum euismod. Ut in eros lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ante mi, venenatis et sodales sodales, egestas at quam"
                    }
                },
                {
                    "id": "para8",
                    "type": "paragraph",
                    "data": {
                        "text": "Donec faucibus venenatis nunc, quis blandit sem <em>rhoncus</em> eget. Sed iaculis placerat feugiat. Nam lobortis ultricies risus in volutpat. Fusce velit neque, euismod in mollis et, dapibus at metus. Maecenas condimentum ut lacus sed porta. Sed ut enim ac arcu molestie efficitur. Duis sit amet sodales arcu. Vestibulum mollis vitae diam sed ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sit amet eros egestas, euismod purus non, mattis nunc."
                    }
                },
                {
                    "id": "para9",
                    "type": "paragraph",
                    "data": {
                        "text": "Fusce consectetur eget mauris ac accumsan. Nullam <a href='https://www.bloomberghtradyo.com'>hendrerit</a> turpis eu bibendum. Vivamus nec pellentesque libero. Suspendisse neque tortor, congue tristique tellus eu, pharetra commodo magna. Aliquam varius est nec fringilla condimentum. Morbi varius mollis dui, ac semper felis malesuada non. Nunc sit amet ex vel libero viverra facilisis in vel eros. Mauris nec felis velit. Cras consectetur odio vitae massa pretium pretium. Ut efficitur pharetra risus at pretium. Integer varius justo et rhoncus volutpat. Sed sollicitudin mollis ipsum vel elementum. Sed sed ornare mauris. Ut consequat blandit euismod. Nullam efficitur, tortor nec luctus condimentum, sapien velit tristique felis, ut blandit lectus odio ac nisl."
                    }
                },
                {
                    "id": "para10",
                    "type": "paragraph",
                    "data": {
                        "text": "Praesent commodo turpis faucibus erat eleifend, nec maximus nisl porttitor. Nulla bibendum tincidunt posuere. Vestibulum euismod sit amet nunc et sodales. Proin molestie mattis quam eget feugiat. Nunc quis mi accumsan, scelerisque lectus maximus, posuere erat. Sed fermentum at lacus eget facilisis. Sed hendrerit, lacus a iaculis laoreet, leo mauris dignissim tellus, ac malesuada dui libero vitae elit. Maecenas hendrerit ipsum mollis quam efficitur, et tempor tortor congue. Mauris fermentum vulputate lorem, nec luctus enim vestibulum vitae. Maecenas in arcu libero. Donec a dolor eu mauris accumsan tincidunt. Mauris consequat neque quis quam tempus, et tincidunt neque pretium. Praesent mauris est, consectetur quis ornare in, vestibulum et felis. Curabitur dictum, lectus at convallis iaculis, massa lorem eleifend arcu, a ultricies nibh quam id mi. Nunc semper nisi nibh, aliquam bibendum dolor suscipit eget."
                    }
                },
                {
                    "id": "para11",
                    "type": "paragraph",
                    "data": {
                        "text": "Aenean vulputate ipsum et elit sollicitudin, quis malesuada urna porta. Proin faucibus sapien nec velit semper, ac cursus urna mollis. Donec vulputate tortor ante, id porttitor dui placerat a. Cras consectetur sapien et ante ultricies, et porta est fermentum. Sed ut augue porttitor, mollis sapien at, ullamcorper erat. Aenean non massa pulvinar, mollis velit sit amet, tempor dolor. Ut non risus magna. In in orci lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ultricies neque nec leo elementum volutpat. In pretium rhoncus mi eget mollis. Maecenas ac lacus sit amet turpis elementum mollis in ac turpis. Nunc pulvinar eu diam eget congue. Aenean tristique malesuada elit, ut tempor nunc fringilla non. Vivamus viverra augue nec quam condimentum rhoncus."
                    }
                },
                {
                    "id": "para12",
                    "type": "paragraph",
                    "data": {
                        "text": "Proin consequat mi dapibus tempor aliquet. Ut ipsum ex, finibus non facilisis nec, ornare in augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id arcu tincidunt libero consequat ornare. Proin maximus aliquam arcu, non mollis mi hendrerit quis. Phasellus non tristique tortor. Fusce molestie aliquam libero eu laoreet. Proin lobortis dignissim aliquam. Etiam massa eros, efficitur id imperdiet eu, blandit in risus. In fringilla mi nec nunc posuere vehicula. Ut at tortor at dui rutrum malesuada. Nunc porttitor ante mauris."
                    }
                },
                {
                    "id": "header21234",
                    "type": "header",
                    "data": {
                        "text": "List",
                        "level": 2
                    }
                },
                {
                    "id": "wA3se1arrn",
                    "type": "list",
                    "data": {
                        "style": "ordered",
                        "meta": {
                            "counterType": "numeric"
                        },
                        "items": [
                            {
                                "content": "In dignissim mauris id arcu convallis pharetra. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Nunc non metus nec neque eleifend tristique. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Etiam commodo enim eget aliquet dictum. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Maecenas ac lacus tempor, imperdiet ante eget, finibus ligula. ",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "para13",
                    "type": "paragraph",
                    "data": {
                        "text": "Phasellus quis odio congue, varius velit et, pellentesque felis. Integer euismod, turpis non aliquet aliquet, diam sapien volutpat dolor, eu posuere massa diam eu augue. Aenean velit justo, tempor a quam non, convallis pellentesque turpis. Donec tempor, quam in hendrerit congue, enim ante blandit neque, condimentum sodales tortor est at lorem. Vestibulum ac lectus vitae nisl cursus vulputate. Curabitur lobortis ex risus, non venenatis augue lacinia eget. Vestibulum sed purus sapien. Fusce quis velit nec magna euismod porta. Donec nisl orci, luctus nec ornare eu, consequat in urna."
                    }
                },
                {
                    "id": "para14",
                    "type": "paragraph",
                    "data": {
                        "text": "Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                    }
                },
                {
                    "id": "para15",
                    "type": "paragraph",
                    "data": {
                        "text": "Aenean eu blandit tortor. Nullam quis lorem euismod, semper leo non, egestas lectus. Aenean odio dui, pellentesque ac pharetra vel, vehicula vel mauris. Duis semper suscipit massa, nec auctor lacus aliquam in. Fusce fringilla augue sapien, vel consectetur elit sagittis sed. In viverra pharetra turpis, quis porta eros interdum in. Fusce eu neque vestibulum, dignissim dui eget, fermentum nibh. Nam tempor nisl quis pellentesque lobortis. Quisque iaculis, nibh quis accumsan tincidunt, est felis suscipit lacus, eget dictum est neque a neque. Quisque mollis tellus in dui blandit, at pellentesque diam tristique. Aenean aliquam est ac eros interdum hendrerit. Proin pellentesque ullamcorper risus, a cursus neque hendrerit nec. Maecenas sit amet neque dui."
                    }
                },
                {
                    "id": "para16",
                    "type": "paragraph",
                    "data": {
                        "text": "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    }
                },
                {
                    "id": "para17",
                    "type": "paragraph",
                    "data": {
                        "text": "Mauris ut orci id massa iaculis malesuada. Morbi at dolor ultrices, elementum erat non, rutrum augue. Nulla dignissim orci et nunc eleifend, eu porttitor orci gravida. Aenean aliquam non nibh in viverra. Morbi tincidunt, augue ut viverra faucibus, nulla quam vulputate orci, a commodo turpis massa sed felis. Nunc ligula velit, sodales et nibh et, convallis fermentum nulla. Nunc sed lacus interdum, mattis ex at, dignissim nibh. Vivamus maximus, urna ut semper viverra, metus purus tincidunt justo, vel iaculis justo tellus vitae sem. Sed tristique tincidunt nibh et pretium. Aenean dolor massa, varius a dictum nec, ornare a libero. Curabitur rutrum felis nec metus pulvinar imperdiet. In luctus molestie quam, ut dignissim neque vulputate eu."
                    }
                },
                {
                    "id": "header212345",
                    "type": "header",
                    "data": {
                        "text": "Table",
                        "level": 2
                    }
                },
                {
                    "id": "5rzktPpiXG",
                    "type": "table",
                    "data": {
                        "withHeadings": false,
                        "stretched": false,
                        "content": [
                            [
                                "<b>Name</b>",
                                "<b>Surname</b>",
                                "<b>Phone</b>"
                            ],
                            [
                                "Kenan",
                                "Gündoğan",
                                "+90 987 654 321"
                            ],
                            [
                                "Josep",
                                "Santano",
                                "+90 987 654 321"
                            ]
                        ]
                    }
                },
                {
                    "id": "para18",
                    "type": "paragraph",
                    "data": {
                        "text": "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio."
                    }
                },
                {
                    "id": "para19",
                    "type": "paragraph",
                    "data": {
                        "text": "Maecenas nisi sapien, viverra id turpis id, accumsan ultrices augue. Aliquam rhoncus, dui eget posuere molestie, arcu leo pretium nunc, at elementum nisl ex nec ante. Quisque vitae sapien gravida, laoreet ex ac, vestibulum enim. Nam at est tortor. In id feugiat arcu. Aenean sagittis sapien in tortor laoreet, sed maximus sapien dapibus. Proin purus urna, efficitur eget sollicitudin sit amet, rhoncus egestas lorem. Maecenas metus nisi, tempor vitae congue a, ultrices sed risus. Fusce viverra nibh nunc. Sed scelerisque massa quis condimentum fringilla. Ut sit amet mollis quam. In rutrum augue in tortor vestibulum, vel iaculis magna egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a hendrerit ipsum. Vestibulum cursus magna a cursus semper. Nunc vitae turpis eget augue elementum fringilla."
                    }
                },
                {
                    "id": "para20",
                    "type": "paragraph",
                    "data": {
                        "text": "Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus."
                    }
                },
                {
                    "id": "para21",
                    "type": "paragraph",
                    "data": {
                        "text": "In hac habitasse platea dictumst. Curabitur imperdiet eros nulla, nec aliquam leo cursus quis. Fusce libero augue, fermentum sit amet tellus ut, semper commodo elit. Donec feugiat id lectus non euismod. Suspendisse lacinia augue id hendrerit ornare. Suspendisse venenatis nisi sed risus lobortis placerat. Maecenas tempus metus elementum, imperdiet nisl a, fringilla magna. Fusce vehicula congue arcu, ac pretium neque volutpat a. Cras viverra quis sem sed tempus. Vivamus vel molestie turpis. Donec nisl libero, rhoncus ac egestas in, varius nec mauris. Donec fringilla, odio sit amet dignissim venenatis, ligula nisl finibus felis, nec congue quam lorem a nibh."
                    }
                },
                {
                    "id": "para22",
                    "type": "paragraph",
                    "data": {
                        "text": "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    }
                },
                {
                    "id": "para23",
                    "type": "paragraph",
                    "data": {
                        "text": "Donec viverra at sem et luctus. In condimentum rutrum mollis. Aenean eget erat purus. Nam dapibus tincidunt ante, nec porttitor mi mollis vel. Maecenas mauris magna, porttitor sit amet cursus id, pulvinar nec diam. Nullam in risus maximus, suscipit turpis a, condimentum velit. Curabitur sodales, orci nec imperdiet faucibus, eros lectus luctus lectus, sit amet sagittis arcu urna et dolor. Fusce vehicula felis sapien, a finibus leo volutpat non. Mauris laoreet at justo nec cursus. Suspendisse potenti. Vivamus odio dolor, pellentesque nec nisi ut, fringilla faucibus turpis. Nullam egestas dolor id orci volutpat, a rutrum elit dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et quam at leo finibus lobortis. In varius, ligula eget pretium commodo, justo tortor gravida mi, et commodo lorem massa ac mauris."
                    }
                }
            ]
        }
    }

    return NextResponse.json(data);
}

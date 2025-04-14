'use client';
import BlogSection from "../../Components/BlogsSection";
import Section from "../../Components/Section";
import { useState, useEffect } from 'react';

const Page = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await fetch('https://serviciopagina.upea.bo/api/cursosAll/14');
                const blogData = await blogResponse.json();
                setBlogPosts(blogData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filterPostsByType = (type) => {
        return blogPosts.filter(post => 
            post.tipo_curso_otro && 
            post.tipo_curso_otro.tipo_conv_curso_nombre === type
        );
    };

    const formatPostData = (posts) => {
        return posts.map(post => ({
            title: post.det_titulo,
            subtitle: post.det_descripcion,
            date: new Date(post.det_fecha_ini).toLocaleDateString(),
            thumbnail: `https://serviciopagina.upea.bo/Cursos/${post.det_img_portada}`,
            category: post.det_modalidad,
            postLink: '',
            authorIcon: '/assets/img/icons/post_user_icon.png',
            commentIcon: '/assets/img/icons/post_comment_icon.png',
            lugar: post.det_lugar_curso,
            costo: post.det_costo,
            fechaFin: new Date(post.det_fecha_fin).toLocaleDateString(),
        }));
    };

    const cursos = {
        sectionTitle: 'CURSOS',
        sectionSubtitle: 'Últimos Cursos',
        postsData: formatPostData(filterPostsByType('CURSOS'))
    };

    const seminarios = {
        sectionTitle: 'SEMINARIOS',
        sectionSubtitle: 'Últimos Seminarios',
        postsData: formatPostData(filterPostsByType('SEMINARIOS'))
    };

    return (
        <div>
            {cursos.postsData.length > 0 && (
                <Section
                    topSpaceLg="10"
                    topSpaceMd="30"
                    bottomSpaceLg="40"
                    bottomSpaceMd="60"
                >
                    <BlogSection data={cursos} />
                </Section>
            )}
            
            {seminarios.postsData.length > 0 && (
                <Section
                    topSpaceLg="40"
                    topSpaceMd="60"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                >
                    <BlogSection data={seminarios} />
                </Section>
            )}
        </div>
    );
};

export default Page;
